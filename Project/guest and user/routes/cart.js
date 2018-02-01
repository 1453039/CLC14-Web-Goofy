var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Order = require('../models/order')
var paypal = require('paypal-rest-sdk');
var nodemailer = require('nodemailer');
var UserProfile = require('../models/user');
var UserAddress = require('../models/user_address');

/* GET users listing. */
router.get('/', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    res.render('cart', { session: sess, items: sess.cart.generateArray() });
});

router.post('/checkout/thank', function(req, res, next) {
    var val = req.body.radioGroup;
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;

    if (val != 2) {
        var order = new Order();
        order.email = sess.email;

        order.total = req.session.cart.totalPrice;
        if (req.session.cart.totalPrice > 250000) {
            order.shipfee = 0;
        } else {
            order.shipfee = 0.1 * req.session.cart.totalPrice;
        }
        order.date_purchase = new Date();

        var item = sess.cart.generateArray();
        item.forEach(function(element) {
            order.book.push({ 'bookId': element.item._id, 'title': element.item.title, 'price': element.item.newprice, 'num': element.qty });
        }, this);
        console.log(order);
        order.save(function(err, result) {});
        req.session.cart = new Cart({ item: {}, totalQty: 0, totalPrice: 0 });

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: '14clc.g4.goofy@gmail.com',
                pass: '14clcg4goofy'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let HelperOptions = {
            from: '"Goofy" <14clc.g4.goofy@gmail.com>', // sender address
            to: sess.email, // list of receivers
            subject: 'Xác nhận đơn hàng ' + order._id, // Subject line
            text: 'Quý khách đã mua hàng tại Goofy thành công.', // plain text body           
        };

        // send mail with defined transport object
        transporter.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

        UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
            if (err) {
                console.log(err);
            }
            res.render('thank', { user: user, order: order, session: sess, items: sess.cart.generateArray() });
        });

    } else {
        var money = req.session.cart.totalPrice / 23000;
        money = money.toFixed(2);
        var payment = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "/execute",
                "cancel_url": "/cancel"
            },
            "transactions": [{
                "amount": {
                    "total": money,
                    "currency": "USD"
                },
                "description": "Payment for order"
            }]
        };

        paypal.payment.create(payment, function(error, payment) {
            if (error) {
                console.log(error);
            } else {
                if (payment.payer.payment_method === 'paypal') {
                    req.session.paymentId = payment.id;

                    var redirectUrl;
                    for (var i = 0; i < payment.links.length; i++) {
                        var link = payment.links[i];
                        if (link.method === 'REDIRECT') {
                            redirectUrl = link.href;
                        }
                    }
                    res.redirect(redirectUrl);
                }
            }
        });
    }

});

router.post('/checkout/payment', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    var address = req.body.address;
    UserAddress.find({ _id: { $eq: address } }, function(err, defaultAddress) {
        if (err) {
            console.log(err);
        }
        res.render('confirm_checkout', { addr: defaultAddress[0], session: sess, items: sess.cart.generateArray() });
    });
});

router.get('/address', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
        if (err) {
            console.log(err);
        }
        UserAddress.find({ userId: user._id, default: false }, function(err, addresses) {
            if (err) {
                console.log(err);
            }
            UserAddress.findOne({ default: true }, function(err, defaultAddress) {
                if (err) {
                    console.log(err);
                }
                res.render('choose_address', { address: addresses, defaultAddress: defaultAddress, users: user, session: sess, items: sess.cart.generateArray() });
            });
        });
    });
});

router.post('/:id', function(req, res, next) {
    var bookId = req.params.id;
    var quantity = req.body.quantity;
    var cart = new Cart(req.session.cart);

    // console.log(bookId);
    // console.log(quantity);

    cart.changeQty(bookId, quantity);
    req.session.cart = cart;
    res.redirect(req.get('referer'));
});




module.exports = router;