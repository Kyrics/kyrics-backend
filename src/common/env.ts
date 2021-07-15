import dotenv from 'dotenv';

dotenv.config();

const { PORT, NODE_ENV, DB_USERNAME, DB_HOST, DB_DBNAME, DB_PASSWORD, DB_PORT, JWT_SECRET, AWS_BUCKET_NAME, DATA_URL } =
  process.env;

const JWT_EXPIRES_IN = String(process.env.JWT_EXPIRES_IN);

export {
  PORT,
  NODE_ENV,
  DB_USERNAME,
  DB_HOST,
  DB_DBNAME,
  DB_PASSWORD,
  DB_PORT,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  AWS_BUCKET_NAME,
  DATA_URL,
};
