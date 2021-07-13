import express from 'express';
import userRouter from './user';
import songRouter from './song';
// import songRouter from './song';
// import { getMainArtists } from '../controller/artist';
// import { createNewUser } from '../service/user';

const router = express.Router();

router.use('/user', userRouter); // 모듈 추가해주세요
router.use('/song', songRouter);

// router.get('/artists', getMainArtists);
// router.post('/signup', createNewUser);

export default router;
