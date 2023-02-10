
const { pg }  = from "pg";

import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const databaseConfig = { connectionString: process.env.PGDATABASE };
console.log(process.env.PGDATABASE )
const pool = new Pool(databaseConfig);

// export default pool;

module.exports = {
  query: (text, params) => pool.query(text, params),
};
// import pgPromise from 'pg-promise';

// const pgp = pgPromise({/* Initialization Options */});

// const db = pgp('postgres://username:password@host:port/database');