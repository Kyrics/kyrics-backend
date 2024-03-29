import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import {
  readUser,
  deleteUser,
  updateUserEmail,
  readMySongs,
  createMySong,
  deleteMySong,
  readMyVocab,
  createMyVocab,
  deleteMyVocab,
} from '../service/user';

const getUser = async (req: Request, res: Response) => {
  const { id } = req.decoded;
  try {
    const readUserRes = await readUser(+id);
    if (!readUserRes) {
      return res.status(400).json({
        status: statusCode.BAD_REQUEST,
        message: '유효하지 않은 아이디',
      });
    }
    return res.status(200).json({
      status: statusCode.OK,
      data: readUserRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const removeUser = async (req: Request, res: Response) => {
  const { id } = req.decoded;
  try {
    const deleteUserRes = await deleteUser(id);
    if (!deleteUserRes) {
      return res.status(403).json({
        status: statusCode.BAD_REQUEST,
        message: '유효하지 않은 아이디',
      });
    }
    return res.status(200).json({
      status: statusCode.OK,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const modifyUserEmail = async (req: Request, res: Response) => {
  const { id: userId } = req.decoded;
  const { email } = req.body;
  try {
    const updateUserEmailRes = await updateUserEmail(userId, email);
    if (updateUserEmailRes instanceof Error) throw updateUserEmailRes;
    return res.status(200).json({
      status: statusCode.OK,
      data: {
        name: updateUserEmailRes.name,
        email: updateUserEmailRes.email,
        updatedAt: updateUserEmailRes.updatedAt,
      },
      message: '수정 성공',
    });
  } catch (error) {
    if (error.message === '유효하지 않은 아이디') {
      return res.status(403).json({
        status: statusCode.BAD_REQUEST,
        message: '유효하지 않은 아이디',
      });
    }
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getMyVocabs = async (req: Request, res: Response) => {
  const { id: userId } = req.decoded;
  try {
    const readMyVocabRes = await readMyVocab(userId);
    if (!readMyVocabRes) {
      return res.status(403).json({
        status: statusCode.BAD_REQUEST,
        message: '유효하지 않은 아이디',
      });
    }
    return res.status(200).json({
      status: statusCode.OK,
      data: readMyVocabRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const postMySong = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { id: userId } = req.decoded;
  if (!id || !userId) {
    return res.status(400).json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await createMySong(+id, userId);
    return res.status(200).json({
      status: statusCode.OK,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const removeMySong = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { id: userId } = req.decoded;
  if (!id || !userId) {
    return res.status(400).json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await deleteMySong(+id, userId);
    return res.status(200).json({
      status: statusCode.OK,
      message: '삭제 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const getMySongs = async (req: Request, res: Response) => {
  const { id: userId } = req.decoded;
  try {
    const readMySongsRes = await readMySongs(userId);
    if (!readMySongsRes) {
      return res.status(403).json({
        status: statusCode.BAD_REQUEST,
        message: '유효하지 않은 아이디',
      });
    }
    return res.status(200).json({
      status: statusCode.OK,
      data: readMySongsRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const postMyVocab = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { id: userId } = req.decoded;
  if (!id || !userId) {
    return res.status(400).json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await createMyVocab(+id, userId);
    return res.status(200).json({
      status: statusCode.OK,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

const removeMyVocab = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { id: userId } = req.decoded;
  if (!id || !userId) {
    return res.status(400).json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await deleteMyVocab(+id, userId);
    return res.status(200).json({
      status: statusCode.OK,
      message: '삭제 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

export {
  getUser,
  removeUser,
  modifyUserEmail,
  getMySongs,
  postMySong,
  removeMySong,
  getMyVocabs,
  postMyVocab,
  removeMyVocab,
};
