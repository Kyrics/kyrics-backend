import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from './user';
import Mood from './mood';
import Lyrics from './lyrics';
import KeyExpression from './keyExpression';

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_DBNAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

sequelize.addModels([User]);
sequelize.addModels([Mood]);
sequelize.addModels([Lyrics]);
sequelize.addModels([KeyExpression]);

export default sequelize;
