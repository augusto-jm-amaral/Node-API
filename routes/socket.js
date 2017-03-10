module.exports = function (app) {
	
	app.libs.io.on("connection", function (client) {
		
		client.on("join", function (data) {
			
		});

		client.on("send", function (data) {
			
		});

		client.on("disconnect", function () {
			
		});

	});	
};