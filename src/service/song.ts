import KeyExpression from '../models/keyExpression';
import { findSongById } from '../repository/song';
import { isSongInUserSongs } from '../repository/mySongs';
import { splitBySeperator } from '../module/seperator';
import { findKeyExpressionBySongId, findKeyExpressionBySongIdWithLogin } from '../repository/keyExpression';

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

const readSong = async (songId: number, userId: number): Promise<IReadSongRes> => {
  const { id, title, youtubeUrl, korLyrics, engLyrics, lyricsStartTime, lyricsDuration, artists, album } =
    await findSongById(songId);

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
    lyrics: lyricsObjAll,
  };
};

const readVocabsWithoutLogin = async (songId: number): Promise<KeyExpression[]> => {
  const findKeyExpressionRes = await findKeyExpressionBySongId(songId);
  return findKeyExpressionRes;
};

const readVocabs = async (songId: number, userId: number): Promise<IReadVocabsRes[]> => {
  const readVocab = await findKeyExpressionBySongIdWithLogin(songId, userId);

  const vocabs = readVocab.map((vocab) => {
    const isSaved = !!vocab.keyExpressionId;
    const vocabWithoutKeyExpressionId = vocab;
    delete vocabWithoutKeyExpressionId.keyExpressionId;
    return { ...vocabWithoutKeyExpressionId, isSaved };
  });

  return vocabs;
};

export { readSong, readVocabsWithoutLogin, readVocabs, IReadVocabsRes };
