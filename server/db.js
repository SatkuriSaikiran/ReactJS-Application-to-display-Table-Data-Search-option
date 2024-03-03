const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Sai123",
    host: "localhost",
    port: 5432,
    database: "cust"
});

module.exports = pool;