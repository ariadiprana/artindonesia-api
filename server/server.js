const logger = require('log4js').getLogger();
const express = require('express');
const log = require('log')
const app = express();

const config = require('./config/config')
const api = require('./api/api');
const auth = require('./auth/routes');

// Database Setup
require('mongoose').connect(config.db.url);

// Middleware Setup
require('./middleware/middleware')(app);

//API Setup
app.use('/api', api);
app.use('/auth', auth);



module.exports = app;
