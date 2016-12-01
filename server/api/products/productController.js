const Product = require('./productModel');
const _ = require('lodash');
const logger = require('log4js').getLogger();

exports.params = function(req, res, next, id) {
  Product.findById(id)
    .then(function(product) {
      if (!product) {
        next(new Error('No product with that id'));
      } else {
        req.product = product;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Product.find({})
    .then(function(products){
      res.json(products);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var product = req.product;
  res.json(product);
};

exports.put = function(req, res, next) {
  var product = req.product;

  var update = req.body;

  _.merge(product, update);

  product.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newproduct = req.body;
  newproduct.author = req.user._id;
  Product.create(newproduct)
    .then(function(product) {
      res.json(product);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.product.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
