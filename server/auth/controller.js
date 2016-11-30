const User = require('../api/users/userModel');
const signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  var token = signToken(req.user._id);
  res.json({token: token});
};
