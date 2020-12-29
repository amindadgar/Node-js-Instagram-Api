// import the libraries
const mysql = require('mysql');
const express = require('express');
require('dotenv').config();
// initialize express framework
const app = express();

// listen on a special port, ex: 9000
app.listen(process.env.PORT,() =>{
    console.log(`server is running on port ${process.env.PORT}`)
})


// create database connection
const connection = mysql.createConnection({
    host: process.env.HOST,
    user : process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err)=> {
    if(err)
        throw err;
    else
        console.log('database connected!');
});


// example url:  /users?id=1
app.get('/users',(req,res) =>{
    const id = req.query.id;
    if(id != undefined){
        connection.query('CALL GetUser(?);',id,(err, rows) =>{
            if(err) throw err;
            else {
                 res.send(rows[0]);
            }
        });
    }else {
        connection.query('select * from users',(err,rows) =>{
            if(err);
            else
                res.send(rows);
        });
    }
});