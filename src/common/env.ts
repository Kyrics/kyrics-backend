import dotenv from 'dotenv';

dotenv.config();
const { PORT, DB_USERNAME, DB_HOST, DB_DBNAME, DB_PASSWORD, JWT_SECRET } =
  process.env;

const JWT_EXPIRES_IN = String(process.env.JWT_EXPIRES_IN);

export {
  PORT,
  DB_USERNAME,
  DB_HOST,
  DB_DBNAME,
  DB_PASSWORD,
  JWT_SECRET,
  JWT_EXPIRES_IN,
};
