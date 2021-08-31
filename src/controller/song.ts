import { Request, Response } from 'express';
import statusCode from '../util/statusCode';
import { readSong, readVocabs, readVocabsWithoutLogin } from '../service/song';

const getSong = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const userId = req.decoded ? req.decoded.id : undefined;
    const readSongRes = await readSong(+id, userId);
    return res.status(200).json({
      status: statusCode.OK,
      data: readSongRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
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
    return res.status(200).json({
      status: statusCode.OK,
      data: readVocabRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

export { getSong, getVocabsInSong };
