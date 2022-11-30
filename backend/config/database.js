import mysql from "mysql2";

// create the connection to database

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "food_ordering_system"
});

// kết nối nếu có lỗi thì in lỗi ra còn không thì sẽ log ra Successfully connected to the database
db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;