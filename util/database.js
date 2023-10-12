const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-learning",
  password: "rootroot",
});

module.exports = pool.promise();
