const router = require('express').Router();
connection = require('../db-connection');
bcrypt = require('bcrypt');




router.post('/signup', express.json(), async (req, res) => {
    try {
        let emp = req.body;
        // encrypt the password
        const hashedPassword = await bcrypt.hash(emp.password, 10);

        // the sql query needed for calling procedure

        // question marks values are as this comments below
        // username,firstname, surname, 
        // email, password, bio,joined
        // email_verified, account_type
        // instagram, twitter, facebook, gitHub, website, phone, isOnline,lashOnline
        const newQuery = 'CALL AddUser(? , ?, ? \
            ,?, ?, ?, ? \
            ,? , ?, \
            ?, ?,? ,?, \
            ?, ?, ?, ? );'

        // all this below could be a procedure and just we send an object

        connection.query(newQuery, [emp.username, emp.firstname, emp.surname, emp.email, hashedPassword, emp.bio, emp.joined, emp.email_verified,
            emp.account_type, emp.instagram, emp.twitter, emp.facebook, emp.gitHub, emp.website, emp.phone, emp.isonline, emp.lastonline
        ], (err, rows) => {
            if (err) {
                res.status(500);
                res.send('internal server error')
                throw err;
            } else {
                res.status(201).send();
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router