var express = require('express'),
    passport = require('passport'),
    flash = require('flash'),
    session = require('express-session');

module.exports = function() {
    var app = express();
    app.set('views', '.app/views');
    app.set('view engine', 'ejs');
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'SuperSecretCookie'
    }));
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/user.server.routes.js')(app);
    app.use(express.static('./public'));
    return app;
};
