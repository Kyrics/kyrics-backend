import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import User from './user';

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_DBNAME,
  dialect: 'mysql',
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

sequelize.addModels([User]);
