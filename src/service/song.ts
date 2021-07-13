import { QueryTypes } from 'sequelize';
import sequelize from '../models';
import Song from '../models/song';
import MySongs from '../models/mySongs';

interface ILyrics {
    startTime: string;
    duration: string;
    kor: string;
    eng: string;
}

interface IReadSongWithArtistQueryRes {
    artist: string;
    albumImageUrl: string;
}

interface IReadSongRes extends IReadSongWithArtistQueryRes{
    id: number;
    title: string;
    youtubeUrl: string;
    isSaved: boolean;
    lyrics: ILyrics[];
}

interface IReadVocabsRes{
    id: number;
    kor: string;
	eng: string;
	korExample: string;
	engExample: string;
	keyExpressionId: number | null;
}

const readSong = async (songId: number, userId: number): Promise<IReadSongRes | Error> => {
    const { id, title, youtubeUrl, korLyrics, engLyrics, lyricsStartTime, lyricsDuration } = await Song.findByPk(songId);
    const artistQuery = `SELECT \`name\` as artist
    FROM song_artist JOIN artist
    ON (song_artist.artist_id=artist.id
    AND song_artist.song_id=${songId});`;
    const albumQuery = `SELECT album_image_url as albumImageUrl
    FROM album, song
    WHERE song.id=${songId}
    AND album.id = song.album_id;`;
    const readArtist = await sequelize.query(artistQuery, { type: QueryTypes.SELECT }) as IReadSongWithArtistQueryRes[];
    const readAlbumImgUrl = await sequelize.query(albumQuery, { type: QueryTypes.SELECT }) as IReadSongWithArtistQueryRes[];

    // lyrics 배열 만들기
    const korLyricsList = korLyrics.split("/$");
    const engLyricsList = engLyrics.split("/$");
    const lyricsStartTimeList = lyricsStartTime.split("/$");
    const lyricsDurationList = lyricsDuration.split("/$");

    const lyricsObjAll = [];

    for (let i=0; i<korLyricsList.length; i+=1){ 
        lyricsObjAll.push({
            startTime: lyricsStartTimeList[i],
            duration: lyricsDurationList[i],
            kor: korLyricsList[i],
            eng: engLyricsList[i]
        })
    }

    let isSaved;
    const readIsSaved = await MySongs.findOne({where: {user_id:userId, song_id: songId}});
    if (readIsSaved === null) {
        isSaved = false;
    } else {
        isSaved = true;
    }

    return {
        id,
        title,
        artist: readArtist[0].artist,
        albumImageUrl: readAlbumImgUrl[0].albumImageUrl,
        youtubeUrl,
        isSaved,
        lyrics: lyricsObjAll
    }
}

const readVocabs = async (songId: number, userId: number): Promise<IReadVocabsRes[] | Error> => {
    const vocabQuery = `SELECT id, kor, eng, kor_example as korExample, eng_example as engExample, key_expression_id as keyExpressionId
                        FROM key_expression LEFT OUTER JOIN my_vocab
                        ON (key_expression.id = my_vocab.key_expression_id
                        AND my_vocab.user_id=${userId})
                        WHERE key_expression.song_id=${songId};`;
    const readVocab = await sequelize.query(vocabQuery, { type: QueryTypes.SELECT }) as IReadVocabsRes[];
        
    const vocabs = readVocab.map((vocab) => {
        const isSaved = !!vocab.keyExpressionId;
        const vocabWithoutKeyExpressionId = vocab
        delete vocabWithoutKeyExpressionId.keyExpressionId;
        return {...vocabWithoutKeyExpressionId, isSaved}
    })
    return vocabs;
}

export { readSong, readVocabs };