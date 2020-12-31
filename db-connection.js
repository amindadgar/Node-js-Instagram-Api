const mysql = require('mysql');
require('dotenv').config();


// create database connection
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err)
        throw err;
    else
        console.log('database connected!');
});

module.exports = connection;