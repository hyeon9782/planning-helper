const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

// 데이터베이스 connection 객체 생성
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// MySQL connection 실행
connection.connect(err => {
    console.log("들어옴")
    if (err) throw err;
    console.log("Successfully connected to the database.");
})

module.exports = connection;