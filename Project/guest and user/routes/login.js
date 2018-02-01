var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');
var Cart = require('../models/cart');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
    var messages = req.flash('error');
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    res.render('login', { csrfToken: req.csrfToken(), messages: messages, session: sess, items: sess.cart.generateArray() });
});

router.post('/', passport.authenticate('local.login', {
    failureRedirect: '/login',
    failureFlash: true
}), function(req, res) {
    if (req.body.loginkeeping) {
        req.session.cookie.maxAge = 30 * 30000; // Cookie expires after 30 days
    } else {
        req.session.cookie.expires = false; // Cookie expires at end of session
    }
    res.redirect('/');
});

module.exports = router;