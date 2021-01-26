const router = require('express').Router(),
 connection = require('../db-connection');



// example url:  /users?id=1
router.delete('/deleteaccount', (req, res) => {
    const id = req.query.id;

    connection.query('CALL DeleteUser(?);', id, (err, rows) => {
        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        }
        else {
            res.status(201)
            res.send('Deleted Successfully!');
        }
    });
});

module.exports = router;