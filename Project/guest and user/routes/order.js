var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Order = require('../models/order')
var UserProfile = require('../models/user');
var UserAddress = require('../models/user_address');
var Book = require('../models/book');

router.get('/', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    Order.find({ email: { $eq: sess.email } }, function(err, order) {
        if (err) {
            return console.log(err);
        }

        res.render('order', { order: order, session: sess, items: sess.cart.generateArray() });
    });
});

router.get('/:id', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    var val = req.params.id;
    console.log(val);
    Order.find({ _id: { $eq: val } }, function(err, order) {
        if (err) {
            return console.log(err);
        }

        res.render('order_detail', { order: order[0], session: sess, items: sess.cart.generateArray() });
    });
});

module.exports = router;