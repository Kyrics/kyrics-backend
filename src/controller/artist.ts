import { Request, Response } from 'express';
import statusCode from '../util/statusCode';
import { readArtist } from '../service/artist';

const getArtist = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({
      status: statusCode.BAD_REQUEST,
      message: '요청 실패',
    });
  }
  try {
    const readArtistRes = await readArtist(+id);
    return res.status(200).json({
      status: statusCode.OK,
      data: readArtistRes,
      message: '요청 성공',
    });
  } catch (error) {
    return res.status(500).json({
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

export { getArtist };
