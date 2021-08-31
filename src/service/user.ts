import User from '../models/user';
import MySongs from '../models/mySongs';
import MyVocab from '../models/myVocab';
import { deleteUserById, findUserById, updateUser } from '../repository/user';
import { readMySongsByUserId, createMySong as createMySongRepo, destroyMySong } from '../repository/mySongs';
import { createMyVocabByUserId, destroyMyVocab, readMyVocabByUserId } from '../repository/myVocabs';

interface IUserRes {
  id: number;
  name: string;
  email: string;
  profileImageUrl: string;
}

interface IMySongsRes {
  id: number;
  title: string;
  artists: string[];
  albumImageUrl: string;
}

interface IMyVocabRes {
  id: number;
  kor: string;
  eng: string;
  korExample: string;
  EngExample: string;
}

const readUser = async (userId: number): Promise<IUserRes> => {
  const readUserRes: IUserRes = await findUserById(userId);
  if (!readUserRes) {
    throw new Error('해당 id의 유저가 없습니다.');
  }
  return readUserRes;
};

const deleteUser = async (userId: number): Promise<number> => {
  const destroyUserByIdRes = await deleteUserById(userId);
  if (!destroyUserByIdRes) {
    throw new Error('이미 존재하지 않는 유저입니다.');
  }
  return destroyUserByIdRes;
};

const updateUserEmail = async (userId: number, newEmail: string): Promise<User> => {
  const findUserRes = await findUserById(userId);
  if (!findUserRes) {
    throw Error('유효하지 않은 아이디');
  }
  findUserRes.email = newEmail;
  const updateUserEmailRes = await updateUser(findUserRes);
  return updateUserEmailRes;
};

const readMySongs = async (userId: number): Promise<IMySongsRes[]> => {
  return readMySongsByUserId(userId);
};

const createMySong = async (id: number, userId: number): Promise<MySongs> => {
  try {
    const createMySongRes = await createMySongRepo(id, userId);
    return createMySongRes;
  } catch (error) {
    if (error.message === 'Validation error') throw new Error('이미 MySongs에 존재하는 노래입니다.');
    throw error;
  }
};

const deleteMySong = async (id: number, userId: number): Promise<number> => {
  const destroyMySongRes = await destroyMySong(id, userId);
  if (!destroyMySongRes) {
    throw new Error('MySongs에 존재하지 않는 노래입니다.');
  }
  return destroyMySongRes;
};

const readMyVocab = async (userId: number): Promise<IMyVocabRes[]> => {
  const readMyVocabRes = await readMyVocabByUserId(userId);
  return readMyVocabRes;
};

const createMyVocab = async (id: number, userId: number): Promise<MyVocab> => {
  try {
    const createMyVocabRes = await createMyVocabByUserId(id, userId);
    return createMyVocabRes;
  } catch (error) {
    if (error.message === 'Validation error') throw new Error('이미 MyVocab에 존재하는 단어입니다.');
    throw error;
  }
};

const deleteMyVocab = async (id: number, userId: number): Promise<number> => {
  const deletedRowNum = await destroyMyVocab(id, userId);
  if (!deletedRowNum) {
    throw new Error('myVocab에 존재하지 않는 vocab입니다.');
  }
  return deletedRowNum;
};

export {
  readUser,
  deleteUser,
  updateUserEmail,
  readMySongs,
  createMySong,
  deleteMySong,
  readMyVocab,
  createMyVocab,
  deleteMyVocab,
  IMySongsRes,
  IMyVocabRes,
};
