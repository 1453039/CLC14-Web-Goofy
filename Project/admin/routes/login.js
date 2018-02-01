
var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
var passport = require('passport');

var User = require('../models/user');

router.get('/', function(req, res, next) {
  var error = req.flash('error');
  res.render('login', {title: 'Log in', error: error, csrfToken: req.csrfToken()});
});

router.post('/', passport.authenticate('local.login', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));


module.exports = router;
