process.env.NODE_ENV = 'test';

var app = require('../app'),
    mongoose = require('mongoose'),
    config = require('config'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should();

chai.use(chaiHttp);

describe('User', function () {
	
	// BEFORE
	before(function (done) {

	  function clearCollections() {
	    for (var collection in mongoose.connection.collections) {
	      mongoose.connection.collections[collection].remove({});
	    }
	    return done();
	  }

	  if (mongoose.connection.readyState === 0) {
	    mongoose.connect(config.DBHost, function (err) {
	      if (err) throw err;
	      return clearCollections();
	    });
	  } else {
	    return clearCollections();
	  }
	});

	// AFTER
	after(function (done) {
	  mongoose.disconnect();
	  return done();
	});

	describe('/POST user', function () {
		it('it should POST a user - 202', function (done) {

			var user = {
				name: 'Augusto',
				email: 'augusto@gmail.com',
				password: '123456'
			};

			chai.request(app)
				.post('/user')
				.send(user)
				.end(function (err, res) {

					res.should.have.status(202);
					
					done();
				});
		});

		it('it should POST a user - 412', function (done) {

			var user = {
				name: 'Augusto',
				email: 'augusto@gmail.com',
				password: '123456'
			};

			chai.request(app)
				.post('/user')
				.send(user)
				.end(function (err, res) {

					res.should.have.status(412);
					
					done();
				});
		});

		it('it should POST a user - 400', function (done) {

			var user = {};

			chai.request(app)
				.post('/user')
				.send(user)
				.end(function (err, res) {

					res.should.have.status(400);
					
					done();
				});
		});
	});
});

