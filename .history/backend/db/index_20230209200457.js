const { Pool } = require('pg')

const pool = new Pool({
    PGUSER: "postgres",
    PGHOST: "localhost",
    PGPASSWORD: "lolik1968,
    PGDATABASE: demo - blog,
    PGPORT: 5432,
    DATABASE_URL: 'postgres://postgres:lolik1968@localHost:5432/demo-blog'
})

// const { dbLogin, database_url, node_env } = require('../config');

// const localConfig = {
//     user: dbLogin.user,
//     host: dbLogin.host,
//     database: dbLogin.database,
//     password: dbLogin.password,
//     port: dbLogin.port
// }

// const herokuConfig = {
//     connectionString: database_url,
//   ssl:  false
// }

// const pool = new Pool(node_env === 'production' ? herokuConfig : localConfig);

module.exports = {
    query: (text, params) => {
        return pool.query(text, params);
    }
}