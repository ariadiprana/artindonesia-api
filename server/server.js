const logger = require('log4js').getLogger();
const express = require('express');
const log = require('log')
const app = express();

const config = require('./config/config')

// Database Setup
require('mongoose').connect(config.db.url);

// Middleware Setup
require('./middleware/middleware')(app);




module.exports = app;
