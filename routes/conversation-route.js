const express = require('express');
const connection = require('../db-connection');


const app = express();

// example url:  /conversation/1
app.get('/conversation/:id',(req,res) =>{
    
    
    connection.query('CALL GetConversation(?);',[req.params.id],(err, rows) =>{
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
// the client always must request with a id!!
app.get('/conversation',(_req,res) =>{
    
    res.send('404 not found!');
});

module.exports = app;