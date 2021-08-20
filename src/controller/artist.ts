import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
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
<<<<<<< HEAD
    console.error(error);
    return res.status(500).json({
=======
    return res.json({
>>>>>>> d5cd0d1fa176831dcb49dc6504cadc05feb353d0
      status: statusCode.INTERNAL_SERVER_ERROR,
      message: '서버 내부 오류',
    });
  }
};

export { getArtist };
