// import the libraries
const express = require('express');
require('dotenv').config();
// initialize express framework
const app = express();

const AppRoutes = require('./app-routes.js');

// listen on a special port, ex: 9000
app.listen(process.env.PORT,() =>{
    console.log(`server is running on port ${process.env.PORT}`)
})


AppRoutes(app);
