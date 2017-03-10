var io = require('socket.io');

module.exports = function (app) {

	return io(app.libs.http);	
};