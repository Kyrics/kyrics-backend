import { QueryTypes } from 'sequelize';
import sequelize from '../models';
import User from '../models/user';
import MySongs from '../models/mySongs';
import MyVocab from '../models/myVocab';

interface IUserRes{
  id: number;
  name: string;
  email: string;
  profileImageUrl: string;
}

interface IMySongsRes{
  id: number;
	title: string;
	artists: string[];
	albumImageUrl: string;
}

const readUser = async(userId: number): Promise<IUserRes | Error> => {
  try{
    const readUserRes = await User.findOne({
      where: {id: userId},
      attributes: ['id', `name`, `email`, `profileImageUrl`]
    })
    return readUserRes
  } catch(error){
    return error;
  }
}

const deleteUser = async (userId: number): Promise<number | Error> => {
  try {
    const destroyMySongsRes = await User.destroy({
      where: {
        userId
      }
    });
    return destroyMySongsRes;
  } catch (error) {
    return error;
  }
};

const updateUserEmail = async (userId: number, newEmail: string): Promise<[number, User[]] | Error> => {
  try {
      const userUpdateRes = await User.update({
        email: newEmail},
      {where: {
        id: userId
      }});
    return userUpdateRes;
  } catch (error) {
    return error;
  }
};

const readMySongs = async(userId: number): Promise<IMySongsRes[] | Error> => {
  try{
    const readMySongsQuery = `SELECT my_songs.song_id, song.title, artist.\`name\`, album.album_image_url
    FROM my_songs
    LEFT OUTER JOIN song ON (my_songs.song_id = song.id)
    LEFT OUTER JOIN album ON (song.album_id = album.id)
    INNER JOIN song_artist ON (song.id = song_artist.song_id)
    INNER JOIN artist ON (song_artist.artist_id = artist.id)
    WHERE my_songs.user_id = ${userId};`;
    const readMySongsRes = await sequelize.query(readMySongsQuery, { type: QueryTypes.SELECT }) as IMySongsRes[];
    return readMySongsRes;
  } catch(error){
    return error;
  }
}

const createMySong = async (id: number, userId: number): Promise<MySongs | Error> => {
  try {
    const createMySongsRes = await MySongs.create({
      userId,
      songId: id,
    });
    return createMySongsRes;
  } catch (error) {
    return error;
  }
};

const deleteMySong = async (id: number, userId: number): Promise<number | Error> => {
  try {
    const destroyMySongsRes = await MySongs.destroy({
      where: {
        userId,
        songId: id,
      },
    });
    return destroyMySongsRes;
  } catch (error) {
    return error;
  }
};

const createMyVocab = async (id: number, userId: number): Promise<MyVocab | Error> => {
    try {
      const createMyVocabRes = await MyVocab.create({
        userId,
        keyExpressionId: id,
      });
      return createMyVocabRes;
    } catch (error) {
      return error;
    }
  };
  
  const deleteMyVocab = async (id: number, userId: number): Promise<number | Error> => {
    try {
      const destroyMyVocabRes = await MyVocab.destroy({
        where: {
          userId,
          keyExpressionId: id,
        },
      });
      return destroyMyVocabRes;
    } catch (error) {
      return error;
    }
  };

export { readUser, deleteUser, updateUserEmail, readMySongs, createMySong, deleteMySong, createMyVocab, deleteMyVocab };
