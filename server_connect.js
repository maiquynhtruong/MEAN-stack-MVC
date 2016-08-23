var port = 1337;
var connect = require('connect');
var app = connect();

var howdyWorld = function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Howdy World');
};

var logger = function(req, res, next) {
    console.log(req.method, req.url);
    next();
};

app.use(logger);
app.use('/', howdyWorld);
app.listen(port);
console.log('server is running at port ' + port);
