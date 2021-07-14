import express from 'express';
import { getUser, removeUser, modifyUserEmail, getMySongs, postMySong, removeMySong, getMyVocabs, postMyVocab, removeMyVocab } from '../controller/user';

// 여기는 항상 응답이 토큰 디코드 미들웨어를 거쳐옵니다.

const router = express.Router();

router.get('/', getUser);
router.delete('/', removeUser);
router.patch('/email', modifyUserEmail);

router.get('/song', getMySongs);
router.post('/song/:id', postMySong);
router.delete('/song/:id', removeMySong);

router.get('/vocab', getMyVocabs);
router.post('/vocab/:id', postMyVocab);
router.delete('/vocab/:id', removeMyVocab);

export default router;