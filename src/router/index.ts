import express from 'express';
import userRouter from './user';
import songRouter from './song';
import artistsRouter from './artists';
import { socialLogin } from '../controller/logIn';

const router = express.Router();

router.use('/login', socialLogin);

router.use('/user', userRouter);
router.use('/song', songRouter);
router.use('/artists', artistsRouter);

export default router;
