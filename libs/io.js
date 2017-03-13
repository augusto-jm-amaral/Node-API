var io = require('socket.io'),
    redis = require('socket.io-redis');

module.exports = function (app) {

	var socketServer = io(app.libs.http);

	socketServer.adapter(redis({ host: 'localhost', port: 6379 }));

	return socketServer;	
};