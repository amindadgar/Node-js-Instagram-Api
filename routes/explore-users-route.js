const express = require('express');
const connection = require('..//db-connection');


const app = express();

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
            if(err) throw err;
            else
                res.send(rows);
        });
    }
});

module.exports = app;