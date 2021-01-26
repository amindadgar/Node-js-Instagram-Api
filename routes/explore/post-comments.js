const router = require('express').Router(),
    connection = require('../../db-connection'),
    sendData = require('../../config/middlewares');




// example url:  /posts/1/comments
router.get('/posts/:id/comments', (req, res) => {


    connection.query('select * from comments where post_id = ?', [req.params.id], (err, rows) => {
        if (err) throw err;
        else {
            sendData(rows, res)
        }
    });

});

module.exports = router;