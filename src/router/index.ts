import express from 'express';
import userRouter from './user';
import songRouter from './song';
import artistsRouter from './artists';
import { socialLogin } from '../controller/logIn';
import { checkLogIn, decodeToken } from '../middleware/auth';
import { getArtist } from '../controller/artist';

const router = express.Router();

router.use('/login', socialLogin);

router.use('/user', checkLogIn, decodeToken, userRouter);
router.use('/song', decodeToken, songRouter);
router.use('/artist/:id', getArtist);
router.use('/artists', artistsRouter);

export default router;
