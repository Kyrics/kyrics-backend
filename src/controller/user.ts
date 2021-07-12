import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import { createMySong, deleteMySong, createMyVocab } from '../service/user';

const postMySong = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;
  if (!id || !userId) {
    return res.json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await createMySong(userId, +id); // createMySong이 실패하면 에러를 던지게 한다.
    return res.json({
      status: statusCode.OK,
      message: '요청 성공',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

const removeMySong = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;
  if (!id || !userId) {
    return res.json({
      status: statusCode.BAD_REQUEST,
      message: '필요한 값이 없습니다.',
    });
  }
  try {
    await deleteMySong(+id, userId);
    return res.json({
      status: statusCode.OK,
      message: '삭제 성공',
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 에러',
    });
  }
};

const postMyVocab = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.body;
    if (!id || !userId) {
      return res.json({
        status: statusCode.BAD_REQUEST,
        message: '필요한 값이 없습니다.',
      });
    }
    try {
      await createMyVocab(userId, +id); // createMyVocab이 실패하면 에러를 던지게 한다.
      return res.json({
        status: statusCode.OK,
        message: '요청 성공',
      });
    } catch (error) {
      console.error(error);
      return res.json({
        status: statusCode.INTERNAL_SERVER_ERROR,
        message: '서버 내부 오류',
      });
    }
  };

export { postMySong, removeMySong, postMyVocab };