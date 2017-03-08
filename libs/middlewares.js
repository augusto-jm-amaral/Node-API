var express = require('express'),
    // compression = require('compression'),
    bodyParser = require('body-parser'),
    helmet = require('helmet');
    // expressValidator = require('express-validator'),
    // customValidators = require('./validators.js')()
    // morgan = require('morgan'),
    // path = require('path'),
    // FileStreamRotator = require('file-stream-rotator'),
    // logger = require("../libs/logger");

module.exports = function(app) {

  // app.use(morgan('combined', {stream: logger.stream}))

    app.set('port', 3000);

    app.libs.db.set('debug', true);

    app.use(helmet());
    app.use(bodyParser.json());

    // app.use(express.static('./public'));
}