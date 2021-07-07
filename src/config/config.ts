import * as dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: process.env.DB_USER_NAME || 'admin',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME || 'kyrics-development',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME || 'kyrics-production',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
  },
};
