import { Request, Response, NextFunction } from 'express';
import { jwtVerify } from '../module/jwt';
import statusCode from '../module/statusCode';

const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

const decodeToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const token = req.headers['x-access-token'] as string;
  if (!token) {
    next();
    console.log('여기로 들어왔당');
  } else {
    console.log(token);
    const user = await jwtVerify(token);
    if (user === TOKEN_EXPIRED) {
      return res.json({
        status: statusCode.UNAUTHORIZED,
        message: '토큰이 만료되었습니다.',
      });
    }
    if (user === TOKEN_INVALID) {
      return res.json({
        status: statusCode.UNAUTHORIZED,
        message: '토큰이 유효하지 않습니다.',
      });
    }
    req.decoded = user;
    next();
  }
};

const checkLogIn = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.json({
      status: statusCode.BAD_REQUEST,
      message: '로그인을 해주세요.',
    });
  }
  next();
};

export { decodeToken, checkLogIn };
