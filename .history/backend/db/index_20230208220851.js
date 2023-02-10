
const { pg }  = require("pg");

const { dotenv } = require  ("dotenv");
dotenv.config();

const { Pool } = pg;
const pool = new Pool(databaseConfig);

// export default pool;

module.exports = {
  query: (text, params) => pool.query(text, params),
};
// import pgPromise from 'pg-promise';

// const pgp = pgPromise({/* Initialization Options */});

// const db = pgp('postgres://username:password@host:port/database');