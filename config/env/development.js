var port = 1337

module.exports = {
    port : port,
    db : 'mongodb://localhost/todos',
    facebook: {
    	clientID: '1724271974502024',
    	clientSecret: '681db0c6d846cf78a669c52b05588051',
    	callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
    },
    twitter: {
    	clientID: 'pTX0onkT6yXBaHglmOAAhHDFP',
    	clientSecret: 'pjfK6RbEIPa32daqC9nTqLEtrOQjq0A6bT251vrLZX6y2bD7GI',
    	callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
    }
};
