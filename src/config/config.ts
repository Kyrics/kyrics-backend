import * as dotenv from 'dotenv';
import { DB_USERNAME, DB_PASSWORD, DB_DBNAME, DB_HOST, DB_PORT } from '../common/env';

dotenv.config();

export default {
  development: {
    username: DB_USERNAME || 'admin',
    password: DB_PASSWORD,
    database: DB_DBNAME || 'kyrics-development',
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: DB_USERNAME || 'admin',
    password: DB_PASSWORD,
    database: DB_DBNAME || 'kyrics-production',
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    dialect: 'mysql',
  },
};
