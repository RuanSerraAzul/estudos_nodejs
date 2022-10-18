const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "Ruan@123",
    database: "nodemysql",
});

module.exports = pool;
