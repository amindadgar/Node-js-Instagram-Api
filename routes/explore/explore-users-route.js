const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /users/1
app.get('/users/:id',(req,res) =>{
    
    
        connection.query('CALL GetUser(?);',[req.params.id],(err, rows) =>{
            if(err) throw err;
            else {
                 res.send(rows[0]);
            }
        });
});
app.get('/users',(req,res) =>{
    connection.query('select * from users',(err,rows) =>{
        if(err) throw err;
        else
            res.send(rows);
    });
});

module.exports = app;