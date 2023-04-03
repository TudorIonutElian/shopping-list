import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

// create the connection to database
const connection = mysql
  .createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  })
  .promise();

export default connection;
