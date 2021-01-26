const deleteAccount = require('./routes/deleteaccount-route.js'),
    singup = require('./routes/signup-route.js'),
    explore = require('./routes/explore/explore-users-route.js'),
    favourite = require('./routes/favourites-route.js'),
    posts = require('./routes/explore/explore-posts-route.js'),
    postLikes = require('./routes/explore/post-likes-route.js'),
    conversation = require('./routes/conversation-route.js'),
    comment = require('./routes/explore/post-comments.js');



const AppRoutes = app => {
    // routing ...
    app.use('/', deleteAccount);
    app.use('/', singup);
    app.use('/', explore);
    app.use('/', favourite);
    app.use('/', posts);
    app.use('/', postLikes);
    app.use('/', conversation);
    app.use('/', comment);
}

module.exports = AppRoutes;