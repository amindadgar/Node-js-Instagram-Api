const express = require('express');
connection = require('../db-connection');
bcrypt = require('bcrypt');


const app = express();
app.use(express.json());


app.get('/signup', (req, res) => {
    res.send('SignUp Page');
})


app.post('/signup', express.json(), async (req, res) => {
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

        connection.query(newQuery, [emp.username, emp.firstname, emp.surname, emp.email, hashedPassword, emp.bio, emp.joined, emp.email_verified,
            emp.account_type, emp.instagram, emp.twitter, emp.facebook, emp.gitHub, emp.website, emp.phone, emp.isonline, emp.lastonline
        ], (err, rows) => {
            if (err) throw err;
            else {
                res.status(201).send();
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = app