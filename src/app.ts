import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import sequelize from './models';
import router from './router';

dotenv.config();

sequelize.sync({ force: false }).catch((error) => {
  console.error(error);
});

const app = express();
const swaggerSpec = YAML.load(path.join(__dirname, '../build/swagger.yaml'));

app.use(express.urlencoded());
app.use(express.json());

app.use('/', router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/health-check', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Kyrics API',
  });
});

interface ExpressError extends Error {
  status: number;
}

app.use((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app
  .listen(process.env.PORT || 8080, () => {
    console.log(`
    ################################################
    🛡️  Server listening on port: ${process.env.PORT || 8080} 🛡️
    ################################################
  `);
    sequelize
      .authenticate()
      .then(async () => {
        console.log('connection success');
      })
      .catch((e) => {
        console.log('TT : ', e);
      });
  })
  .on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
