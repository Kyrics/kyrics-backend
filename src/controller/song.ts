import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import { readSong, readSongWithoutLogin, readVocabs, readVocabsWithoutLogin } from '../service/song';

const getSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    let readSongRes;
    let userId;
    if (!req.decoded) {
      readSongRes = await readSongWithoutLogin(+id);
    } else {
      userId = req.decoded.id;
      readSongRes = await readSong(+id, userId);
    }
    return res.json({
      status: statusCode.OK,
      data: readSongRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

const getVocabsInSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    let readVocabRes;
    let userId;
    if (!req.decoded) {
      readVocabRes = await readVocabsWithoutLogin(+id);
    } else {
      userId = req.decoded.id;
      readVocabRes = await readVocabs(+id, userId);
    }
    return res.json({
      status: statusCode.OK,
      data: readVocabRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

export { getSong, getVocabsInSong };
