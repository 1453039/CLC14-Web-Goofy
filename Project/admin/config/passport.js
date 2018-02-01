const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Book = require('../models/book');

const user = {
  username: 'admin',
  password: 'admin',
  id: 1
};

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err, user);
  });
});

passport.use('local.login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, username, password, done){
  User.findOne({username: username, password: password}, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      req.flash('error', 'Invalid username or password!');
      return done(null, false);
    } else {
      req.session.username = username;
      return done(null, user);
    }
  });
}));
