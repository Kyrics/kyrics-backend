import { QueryTypes } from 'sequelize';
import sequelize, { KeyExpression } from '../models';
import { findSongById } from '../repository/song';
import { isSongInUserSongs } from '../repository/mySongs';
import { splitBySeperator } from '../module/seperator';

interface ILyrics {
  startTime: number;
  duration: number;
  kor: string;
  eng: string;
}

interface IReadSongWithArtistQueryRes {
  artist: string;
  albumImageUrl: string;
}

interface IReadSongRes extends IReadSongWithArtistQueryRes {
  id: number;
  title: string;
  youtubeUrl: string;
  isSaved: boolean;
  lyrics: ILyrics[];
}

interface IReadVocabsRes {
  id: number;
  kor: string;
  eng: string;
  korExample: string;
  engExample: string;
  keyExpressionId: number | null;
}


const readSong = async (songId: number, userId: number): Promise<IReadSongRes|Error> => {
  try {
    const {
      id,
      title,
      youtubeUrl,
      korLyrics,
      engLyrics,
      lyricsStartTime,
      lyricsDuration,
      artists,
      album
    } = await findSongById(songId);
    
    const lyricsObjAll = splitBySeperator(korLyrics, engLyrics, lyricsStartTime, lyricsDuration);
    let isSaved = false;
    if (userId && isSongInUserSongs(songId, userId)) {
      isSaved = true;
    }  

    return {
      id,
      title,
      artist: artists[0].name,
      albumImageUrl: album.albumImageUrl,
      youtubeUrl,
      isSaved,
      lyrics: lyricsObjAll
    }
  } catch(error) {
    return error;
  }
}

const readVocabsWithoutLogin = async (songId: number): Promise<KeyExpression[] | Error> => {
  const findVocabsRes = await KeyExpression.findAll({
    attributes: ['id', 'kor', 'eng', ['kor_example', 'korExample'], ['eng_example', 'engExample']],
    where: { songId },
  });
  return findVocabsRes;
};

const readVocabs = async (songId: number, userId: number): Promise<IReadVocabsRes[] | Error> => {
  const vocabQuery = `SELECT id, kor, eng, kor_example as korExample, eng_example as engExample, key_expression_id as keyExpressionId
                        FROM key_expression LEFT OUTER JOIN my_vocab
                        ON (key_expression.id = my_vocab.key_expression_id
                        AND my_vocab.user_id=${userId})
                        WHERE key_expression.song_id=${songId};`;
  const readVocab = (await sequelize.query(vocabQuery, { type: QueryTypes.SELECT })) as IReadVocabsRes[];

  const vocabs = readVocab.map((vocab) => {
    const isSaved = !!vocab.keyExpressionId;
    const vocabWithoutKeyExpressionId = vocab;
    delete vocabWithoutKeyExpressionId.keyExpressionId;
    return { ...vocabWithoutKeyExpressionId, isSaved };
  });
  return vocabs;
};

export { readSong, readVocabsWithoutLogin, readVocabs };
