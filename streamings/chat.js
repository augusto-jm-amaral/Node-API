module.exports = function (app){

	app.libs.io.on('connection', function(client) {
		console.log('user connected');
	});
};