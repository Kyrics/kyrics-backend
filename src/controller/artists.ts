import { Request, Response } from 'express';
import statusCode from '../module/statusCode';
import { readArtists } from '../service/artists';

const getArtists = async (req: Request, res: Response) => {
    try {
      const readArtistsRes = await readArtists();
      return res.status(200).json({
        status: statusCode.OK,
        data: readArtistsRes,
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

export { getArtists };