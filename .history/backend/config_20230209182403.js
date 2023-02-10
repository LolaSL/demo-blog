require('dotenv').config()

module.exports = {
    dbLogin: {
        user: process.env.DBUSER,
        host: process.env.DBHOST,
        database: process.env.DBDATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,

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
