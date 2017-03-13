var passport = require('passport');
var passportJwt = require('passport-jwt');


var authentications = {};

authentications.common = function(playload, done){

  var promise = User.findById(playload._id);
  promise.then(function (user) {
    
    if(user && (user.permission == 'common'))
      return done(null, user);
    
    return done(null, false);

  }).catch(function (err) {
    return done(null, false);
  });
};

authentications.admin = function(playload, done){

  var promise = User.findById(playload._id);
  promise.then(function (user) {
    
    if(user && (user.permission == 'admin'))
      return done(null, user);
    
    return done(null, false);

  }).catch(function (err) {
    return done(null, false);
  });
}; 

module.exports = function (app) {

  var User = app.libs.db.models.User;
  var cfg = app.libs.config;
  var Strategy = passportJwt.Strategy;

  var opts = {};

  opts.secretOrKey = 'S3C43T*!*&8!*&!';
  opts.jwtFromRequest = passportJwt.ExtractJwt.fromAuthHeader();

  passport.use('common',new Strategy(opts, authentications.common));
  passport.use('admin',new Strategy(opts, authentications.admin));

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function(permissao){
      return passport.authenticate(permissao, { session: false });
    }
  };

};
