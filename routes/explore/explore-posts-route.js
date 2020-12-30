const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /posts/1
app.get('/posts/:id',(req,res) =>{
    
    
    connection.query('select * from posts where post_id = ?',[req.params.id],(err, rows) =>{
        if(err) throw err;
        else {
           res.send(rows[0]);
        }
    });
    
});


// get all the posts
app.get('/posts',(req,res) =>{
    connection.query('select * from posts',(err,rows) =>{
        if(err) throw err;
        else
            res.send(rows);
    });
});

module.exports = app;