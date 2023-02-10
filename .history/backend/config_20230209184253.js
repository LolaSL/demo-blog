require('dotenv').config();

module.exports = {
    dbLogin: {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,

    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },

    node_env: process.env.NODE_ENV,
    database_url: process.env.DATABASE_URL,
}
