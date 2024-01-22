import pg from 'pg';
import dotenv from 'dotenv';
const { Client } = pg;
dotenv.config();

const conn = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

conn.connect();

export const operation = async (sql, values = "") => {
  return new Promise((resolve, reject) => {
    conn.query(sql, values, (error, result) => {
      if (error) return reject(error);
      return resolve(JSON.parse(JSON.stringify(result.rows)));
    });
  });
};

export default conn;
