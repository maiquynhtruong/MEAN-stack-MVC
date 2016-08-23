exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello from MEAN MVC',
        user: req.user ? req.user.username : ''
    });
};
