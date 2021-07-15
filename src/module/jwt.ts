import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { SocialType } from '../service/social';

dotenv.config();

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

interface JwtInputPayload {
  id: number;
  socialId: string;
  socialType: SocialType;
}

const jwtSign = async (user: JwtInputPayload) => {
  const signOption: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: JWT_EXPIRES_IN,
    issuer: 'kyrics',
  };

  const accessToken = jwt.sign(user, JWT_SECRET, signOption);
  return accessToken;
};

const jwtVerify = async (token: string): Promise<jwt.JwtPayload | string | number> => {
  let decoded: string | jwt.JwtPayload;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    if (error.message === 'jwt expired') {
      return TOKEN_EXPIRED;
    }
    return TOKEN_INVALID;
  }
  return decoded;
};

export { JwtInputPayload, jwtSign, jwtVerify };
