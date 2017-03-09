process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
    User = require('../models/user'),
    // app = require('../app'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should();

chai.use(chaiHttp);

describe('Users', function () {
	beforeEach(function (done) {
		User.remove({}, function (err) {
			done();
		});
	});
});

describe('/POST user', function () {
	it('it should POST a user', function (done) {

		var user = {
			name: 'Augusto',
			email: 'augusto@gmail.com',
			password: '123456'
		};

		chai.request('http://localhost:3000')
			.post('/user')
			.send(user)
			.end(function (err, res) {

				res.should.have.status(202);
				
				done();
			});
	});
});
