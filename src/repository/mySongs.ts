import { QueryTypes } from "sequelize";
import MySongs from "../models/mySongs";
import sequelize from "../models";
import { IMySongsRes } from "../service/user";

const readMySongsByUserId = async (userId: number) => {
  const readMySongsQuery = `SELECT my_songs.song_id as id, song.title, artist.\`name\` as artist, album.album_image_url as albumImageUrl
                            FROM my_songs
                            LEFT OUTER JOIN song ON (my_songs.song_id = song.id)
                            LEFT OUTER JOIN album ON (song.album_id = album.id)
                            INNER JOIN song_artist ON (song.id = song_artist.song_id)
                            INNER JOIN artist ON (song_artist.artist_id = artist.id)
                            WHERE my_songs.user_id = ${userId}
                            ORDER BY my_songs.created_at DESC;`;
  const readMySongsRes = await sequelize.query(readMySongsQuery, { type: QueryTypes.SELECT }) as IMySongsRes[];
  return readMySongsRes;
}

const createMySong = async (id: number, userId: number) => {
  const createMySongsRes = await MySongs.create({
    userId,
    songId: id,
  });
  return createMySongsRes;
}

const destroyMySong = async (id: number, userId: number) => {
  const destroyMySongsRes = await MySongs.destroy({
    where: {
      userId,
      songId: id,
    },
  });
  return destroyMySongsRes;
}

const isSongInUserSongs = async (songId: number, userId: number): Promise<Boolean | Error> => {
  try {
    const findMySongRes = await MySongs.findOne({
      where: {
        userId,
        songId,
      }
    });
    return !!findMySongRes;
  } catch (error) {
    return new Error('isSaved 체크에 실패했습니다.');
  }
}
export { readMySongsByUserId, createMySong, destroyMySong, isSongInUserSongs }