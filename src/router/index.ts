import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import userRouter from './user';
import songRouter from './song';
import artistsRouter from './artists';
import { socialLogin } from '../controller/logIn';
import { checkLogIn, decodeToken } from '../middleware/auth';
import { getArtist } from '../controller/artist';

const router = express.Router();

router.use('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Kyrics API',
  });
});

router.use('/health-check', (req, res) => {
  res.status(200).json({
    message: 'health check: OK',
  });
})

const swaggerSpec = YAML.load(path.join(__dirname, '../../build/swagger.yaml'));
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

router.use('/login', socialLogin);

router.use('/user', checkLogIn, decodeToken, userRouter);
router.use('/song', decodeToken, songRouter);
router.use('/artist/:id', getArtist);
router.use('/artists', artistsRouter);

export default router;
