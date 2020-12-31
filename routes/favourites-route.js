const express = require('express');
connection = require('../db-connection');


const app = express();
// request users favourite items
app.get('/users/:id/favourites', (req, res) => {

    connection.query('select * from favourites where user = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        else {
            res.send(rows);
        }
    })

});

module.exports = app;