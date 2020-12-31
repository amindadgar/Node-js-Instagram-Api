const express = require('express');
const connection = require('../../db-connection');


const app = express();

// example url:  /users/1
app.get('/users/:id',(req,res) =>{
    
    
        connection.query('CALL GetUser(?);',[req.params.id],(err, rows) =>{
            if(err) throw err;
            else {
                if(rows[0].length != 0){
                    const sendobject = {
                        available: true,
                        data:rows[0]
                    };
                    res.send(sendobject);
                }else{
                    const sendobject = {
                        available: false,
                        data:{}
                    };
                    res.send(sendobject);
                }
            }
        });
});
app.get('/users',(req,res) =>{
    connection.query('select username, \
    firstname,surname,email, \
    bio,account_type,instagram\
    ,twitter,facebook,github,website,\
    phone,isOnline,lastOnline  from users',(err,rows) =>{
        
        if(err) throw err;
        else
            res.send(rows);
    });
});

module.exports = app;