
import pg from "pg";
const { Pool } = pg;

dotenv.config();

const databaseConfig = { connectionString: process.env.PGDATABASE };
const pool = new Pool(databaseConfig);

export default pool;
const pool = new Pool();
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };
// import pgPromise from 'pg-promise';

// const pgp = pgPromise({/* Initialization Options */});

// const db = pgp('postgres://username:password@host:port/database');