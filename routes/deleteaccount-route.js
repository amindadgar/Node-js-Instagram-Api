const express = require('express');
 connection = require('../db-connection');


const app = express();


// example url:  /users?id=1
app.delete('/deleteaccount',(req,res) =>{
    const id = req.query.id;
    
    connection.query('CALL DeleteUser(?);',id,(err, rows) =>{
        if(err) throw err;
        else {
             res.send('Deleted Successfully!');
        }
    });    
});

module.exports = app 