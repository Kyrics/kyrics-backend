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
      return res.json({
        status: statusCode.INTERNAL_SERVER_ERROR,
        message: '서버 내부 오류',
      });
    }
};

export { getArtists };