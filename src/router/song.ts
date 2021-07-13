import express from 'express';
import { getSong, getVocabsInSong} from '../controller/song';

// 여기는 항상 응답이 토큰 디코드 미들웨어를 거쳐옵니다.

const router = express.Router();

router.get('/:id', getSong);
router.get('/:id/vocab', getVocabsInSong);

export default router;
