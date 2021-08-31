import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import sequelize from './models';
import router from './router';
import { PORT } from './common/env';

const app = express();

app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, x-access-token');
  next();
});

app.use(express.urlencoded());
app.use(express.json());


interface ExpressError extends Error {
  status: number;
}

app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};
  res.status(err.status || 500);
});

app.use('/', router);

sequelize.sync({ force: false });

app
  .listen(PORT || 8081, () => {
    sequelize.authenticate();
  })
  .on('error', () => {
    process.exit(1);
  });
