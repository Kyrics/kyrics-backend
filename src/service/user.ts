import MySongs from '../models/mySongs';
import MyVocab from '../models/myVocab';

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

export { createMySong, deleteMySong };