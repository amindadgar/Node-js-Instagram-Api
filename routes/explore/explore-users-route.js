const router = require('express').Router,
 connection = require('../../db-connection'),
 sendData = require('../../config/middlewares');



// example url:  /users/1
router.get('/users/:id', (req, res) => {


    connection.query('CALL GetUser(?);', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        }
        else {
            sendData(rows, res);
        }
    });
});

// get a list of users
router.get('/users', (req, res) => {
    connection.query('select username, \
    firstname,surname,email, \
    bio,account_type,instagram\
    ,twitter,facebook,github,website,\
    phone,isOnline,lastOnline  from users', (err, rows) => {

        if (err) {
            res.status(500);
            res.send('server internal error');
            throw err;
        }
        else{
            res.status(200);
            res.send(rows);
        }
    });
});

module.exports = app;