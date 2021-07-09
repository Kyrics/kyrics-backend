import { Sequelize, Model } from 'sequelize';
import config from '../config/config';

const env = process.env.NODE_ENV || 'development';

export default new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: 'mysql',
});
