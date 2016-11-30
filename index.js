const config = require('./server/config/config');
const app = require('./server/server');
const logger = require('log4js').getLogger();


app.listen(config.port);
logger.debug('listening on http://localhost:' + config.port);
