const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /posts/1
app.get('/posts/:id', (req, res) => {


    connection.query('select * from posts where post_id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        else {
            if (rows[0].length != 0) {
                const sendobject = {
                    available: true,
                    data: rows[0]
                };
                res.send(sendobject);
            } else {
                const sendobject = {
                    available: false,
                    data: {}
                };
                res.send(sendobject);
            }
        }
    });

});


// get all the posts
app.get('/posts', (req, res) => {
    connection.query('select * from posts', (err, rows) => {
        if (err) throw err;
        else
            res.send(rows);
    });
});

module.exports = app;