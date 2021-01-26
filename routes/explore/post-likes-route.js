const router = require('express').Router(),
    connection = require('../../db-connection'),
    sendData = require('../../config/middlewares');




// example url:  /posts/1/likes
router.get('/posts/:id/likes', (req, res) => {
    connection.query('select * from likes where post_id = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        } else {
            sendData(rows, res);
        }
    });
});


module.exports = router;