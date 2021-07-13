import express from 'express';
import userRouter from './user';
import songRouter from './song';
import artistsRouter from './artists';

const router = express.Router();

router.use('/user', userRouter);
router.use('/song', songRouter);
router.use('/artists', artistsRouter);

export default router;
