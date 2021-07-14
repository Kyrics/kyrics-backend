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
  const readUserRes = await User.findOne({
    where: {id: userId},
    attributes: ['id', `name`, `email`, `profileImageUrl`]
  })
  return readUserRes;
}

const deleteUser = async (userId: number): Promise<number | Error> => {
  const destroyMySongsRes = await User.destroy({
    where: {
      id: userId
    }
  });
  return destroyMySongsRes;
};

const updateUserEmail = async (userId: number, newEmail: string): Promise<User | Error> => {
  const findUserRes = await User.findOne({where : {id: userId}});
  if (!findUserRes) {
    throw Error('유효하지 않은 아이디');
  }
  findUserRes.email = newEmail;
  await findUserRes.save();
  return findUserRes;
};

const readMySongs = async(userId: number): Promise<IMySongsRes[] | Error> => {
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

const createMySong = async (id: number, userId: number): Promise<MySongs | Error> => {
  const createMySongsRes = await MySongs.create({
    userId,
    songId: id,
  });
  return createMySongsRes;
};

const deleteMySong = async (id: number, userId: number): Promise<number | Error> => {
  const destroyMySongsRes = await MySongs.destroy({
    where: {
      userId,
      songId: id,
    },
  });
  return destroyMySongsRes;
};

const createMyVocab = async (id: number, userId: number): Promise<MyVocab | Error> => {
  const createMyVocabRes = await MyVocab.create({
    userId,
    keyExpressionId: id,
  });
  return createMyVocabRes;
  };
  
  const deleteMyVocab = async (id: number, userId: number): Promise<number | Error> => {
    const destroyMyVocabRes = await MyVocab.destroy({
      where: {
        userId,
        keyExpressionId: id,
      },
    });
    return destroyMyVocabRes;
  };

export { readUser, deleteUser, updateUserEmail, readMySongs, createMySong, deleteMySong, createMyVocab, deleteMyVocab };
