const Sculptor = require('./sculptorModel');
const _ = require('lodash');
const logger = require('log4js').getLogger();

exports.params = function(req, res, next, id) {
  Sculptor.findById(id)
    .then(function(sculptor) {
      if (!sculptor) {
        next(new Error('No sculptor with that id'));
      } else {
        req.sculptor = sculptor;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Sculptor.find({})
    .then(function(sculptors){
      res.json(sculptors);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var sculptor = req.sculptor;
  res.json(sculptor);
};

exports.put = function(req, res, next) {
  var sculptor = req.sculptor;

  var update = req.body;

  _.merge(sculptor, update);

  sculptor.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newsculptor = req.body;
  newsculptor.author = req.user._id;
  Sculptor.create(newsculptor)
    .then(function(sculptor) {
      res.json(sculptor);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.sculptor.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
