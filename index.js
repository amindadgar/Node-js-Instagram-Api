// import the libraries
const mysql = require('mysql');
const express = require('express');

require('dotenv').config();


const connection = mysql.createConnection({
    host: process.env.HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err)=> {
    if(err) throw err;
    console.log('database connected!')
})