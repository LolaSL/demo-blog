import { Pool } from "pg";

const pool = new Pool();
export function query(text, params) { return pool.query(text, params); }