import { jwtPayload } from '../module/jwt';

declare global {
  namespace Express {
    interface Request {
      decoded?: jwtPayload;
    }
  }
}
