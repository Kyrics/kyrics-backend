import express from 'express';
import { getArtists } from '../controller/artists';

const router = express.Router();

router.get('/', getArtists);

export default router;
