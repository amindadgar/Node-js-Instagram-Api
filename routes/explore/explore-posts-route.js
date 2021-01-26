const router = require('express').Router(),
    connection = require('../../db-connection'),
    sendData = require('../../config/middlewares');


// example url:  /posts/1
router.get('/posts/:id', (req, res) => {


    connection.query('select * from posts where post_id = ?', [req.params.id], (err, rows) => {
        if (err){
            res.status(500);
            res.send('server internal error');
            throw err;
        } 
        else {
            sendData(rows, res)
        }
    });

});


// get all the posts
router.get('/posts', (req, res) => {
    connection.query('select * from posts', (err, rows) => {
        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        } else
            res.send(rows);
    });
});

module.exports = router;