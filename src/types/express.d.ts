import { jwtPayload } from '../util/jwt';

declare global {
  namespace Express {
    interface Request {
      decoded?: jwtPayload;
    }
  }
}
