import express from 'express';
import { getSong, getVocabsInSong } from '../controller/song';

const router = express.Router();

router.get('/:id', getSong);
router.get('/:id/vocab', getVocabsInSong);

export default router;
