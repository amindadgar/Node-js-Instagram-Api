const router = require('express').Router(),
    connection = require('../db-connection');


const app = express();
// request users favourite items
router.get('/users/:id/favourites', (req, res) => {

    connection.query('select * from favourites where user = ?', [req.params.id], (err, rows) => {
        if (err) {
            res.status(500);
            res.send('internal server error');
            throw err;
        } else {
            res.status(200);
            res.send(rows);
        }
    })

});

module.exports = router;