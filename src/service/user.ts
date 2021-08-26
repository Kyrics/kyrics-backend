import User from '../models/user';
import MySongs from '../models/mySongs';
import MyVocab from '../models/myVocab';
import { deleteUserById, findUserById, updateUser } from '../repository/user';
import { readMySongsByUserId, createMySong as createMySongRepo, destroyMySong } from '../repository/mySongs';
import { createMyVocabByUserId, destroyMyVocab, readMyVocabByUserId } from '../repository/myVocabs';

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

interface IMyVocabRes{
  id: number;
  kor: string;
  eng: string;
  korExample: string;
  EngExample: string;
}

const readUser = async(userId: number): Promise<IUserRes|Error> => {
  const readUserRes: IUserRes = await findUserById(userId);
  if (!readUserRes) {
    return new Error('해당 id의 유저가 없습니다.');
  }
  return readUserRes;
}

const deleteUser = async (userId: number): Promise<number|Error> => {
  const destroyUserByIdRes = await deleteUserById(userId);
  if (!destroyUserByIdRes) {
    return new Error('이미 존재하지 않는 유저입니다.');
  }
  return destroyUserByIdRes;
};

const updateUserEmail = async (userId: number, newEmail: string): Promise<User|Error> => {
  const findUserRes = await findUserById(userId);
  if (!findUserRes) {
    return Error('유효하지 않은 아이디');
  }
  findUserRes.email = newEmail;
  const updateUserEmailRes = await updateUser(findUserRes);
  return updateUserEmailRes;
};

const readMySongs = async(userId: number): Promise<IMySongsRes[] | Error> => {
  return readMySongsByUserId(userId);
}

const createMySong = async (id: number, userId: number): Promise<MySongs | Error> => {
  const createMySongRes = await createMySongRepo(id, userId);
  return createMySongRes;
};

const deleteMySong = async (id: number, userId: number): Promise<number | Error> => {
  const destroyMySongRes = await destroyMySong(id, userId);
  if(!destroyMySong) {
    return new Error('MySongs에 존재하지 않는 노래입니다.');
  }
  return destroyMySongRes;
};

const readMyVocab = async(userId: number): Promise<IMyVocabRes[] | Error> => {
  return readMyVocabByUserId(userId);
}

const createMyVocab = async (id: number, userId: number): Promise<MyVocab | Error> => {
    return createMyVocabByUserId(id, userId);
  };
  
  const deleteMyVocab = async (id: number, userId: number): Promise<number | Error> => {
    if (!deleteMyVocab) {
      return new Error('myVocab에 존재하지 않는 vocab입니다.');
    }
    return destroyMyVocab(id, userId);
  };

export { readUser, deleteUser, updateUserEmail, readMySongs, createMySong, deleteMySong, readMyVocab, createMyVocab, deleteMyVocab, IMySongsRes, IMyVocabRes };
