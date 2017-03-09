var express = require('express'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    config = require('config'),
    morgan = require('morgan');
    // compression = require('compression'),
    // expressValidator = require('express-validator'),
    // customValidators = require('./validators.js')()
    // path = require('path'),
    // FileStreamRotator = require('file-stream-rotator'),
    // logger = require("../libs/logger");

module.exports = function(app) {

    if(config.util.getEnv('NODE_ENV') !== 'test'){
        app.use(morgan('combined'));
    }

    app.set('port', 3000);

    app.libs.db.set('debug', true);

    app.use(helmet());
    app.use(bodyParser.json());

    // app.use(express.static('./public'));
}