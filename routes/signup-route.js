
const express = require('express');

const app = express();


app.get('/signup',(req,res) =>{
    res.send('SignUp Page');
})


app.post('/signup',(req,res) =>{
    let emp = req.body;

    // the sql query needed for calling procedure
    const query = 'SET @userId = ?,@UserName = ?,@firstname = ? \
    ,@surname = ?,@email = ?,@password = ? \
    ,@bio = ?,@joined = ?,@email_verified = ? \
    ,@account_type = ?,@instagram = ?,@twitter = ?,@facebook = ? \
    ,@github = ?,website = ?,@phone = ?,@isOnline = ?,@lastOnline = ? \
    \
    CALL AddUser(@userId,@UserName,@firstname,@surname \
        ,@email,@password,@bio,@joined \
        ,@email_verified ,@account_type, \
        @instagram,@twitter,@facebook,@github, \
        @website,@phone,@isOnline,@lastOnline );'

    connection.query(query,[emp.UserId,emp.UserName,emp.FirstName
        ,emp.SurName, emp.Password, emp.Bio, emp.Joined, emp.Email_verified, 
        emp.AccountType, emp.Instagram, emp.Twitter, emp.FaceBook
        ,emp.GitHub ,emp.Website, emp.Phone, emp.IsOnline, emp.LastOnline],(err, rows) =>{
        if(err) throw err;
        else {
             res.send('User implemented Successfully!');
        }
    });    
});

module.exports = app