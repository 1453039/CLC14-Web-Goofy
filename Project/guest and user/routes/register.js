var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var UserProfile = require('../models/user');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
    var messages = req.flash('message');
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    res.render('register', { csrfToken: req.csrfToken(), messages: messages, session: sess, items: sess.cart.generateArray() });
});

router.get('/UserProfile', function(req, res, next) {
    UserProfile.find(function(err, result) {
        res.send(result);
    });
});

router.post('/', passport.authenticate('local.register', {
    successRedirect: '/login',
    failureRedirect: '/register',
    failureFlash: true
}));

module.exports = router;