const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /posts/1/likes
app.get('/posts/:id/likes', (req, res) => {
    connection.query('select * from likes where post_id = ?', [req.params.id], (err, rows) => {
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


module.exports = app;