const pool = require('pg')
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
        return pool.Query(text, params);
    }
}