const deleteAccount = require('.\\routes\\deleteaccount-route.js');
 singup = require('.\\routes\\signup-route.js');


const AppRoutes = app =>{
    // routing ...
    app.use('/',deleteAccount);
    app.use('/',singup);
}

module.exports = AppRoutes;