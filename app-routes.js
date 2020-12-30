const deleteAccount = require('.\\routes\\deleteaccount-route.js');
 singup = require('.\\routes\\signup-route.js');
 explore = require('.\\routes\\explore-users-route.js');
 favourite = require('.\\routes\\favourites-route.js');


const AppRoutes = app =>{
    // routing ...
    app.use('/',deleteAccount);
    app.use('/',singup);
    app.use('/',explore);
    app.use('/',favourite);
}

module.exports = AppRoutes;