const logger = require('log4js').getLogger();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const override = require('method-override');


module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());

  app.use(function(err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token');
      return;
    }

    logger.error(err.stack);
    res.status(500).send('Oops');
  });

};
