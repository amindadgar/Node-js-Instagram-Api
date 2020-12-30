const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /posts/1/likes
app.get('/posts/:id/likes',(req,res) =>{
    connection.query('select * from likes where post_id = ?',[req.params.id],(err, rows) =>{
        if(err) throw err;
        else {
             res.send(rows[0]);
        }
    });
});


module.exports = app;