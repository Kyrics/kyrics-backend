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

export { createMySong, deleteMySong, createMyVocab };