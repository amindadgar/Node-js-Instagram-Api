const router = require('express').Router(),
    const connection = require('../db-connection');
const sendData = require('../config/middlewares')



// example url:  /conversation/1
router.get('/conversation/:id', (req, res) => {


    connection.query('CALL GetConversation(?);', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        } else {
            sendData(rows, res)
        }
    });

});
// the client always must request with a id!!
router.get('/conversation', (_req, res) => {
    res.status(404);
    res.send('404 not found!');
});

module.exports = router;