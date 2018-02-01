var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var Cart = require('../models/cart');
var UserProfile = require('../models/user');
var UserAddress = require('../models/user_address');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/user_detail', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
        if (err) {
            console.log(err);
        }
        UserAddress.findOne({ default: true }, function(err, defaultAddress) {
            if (err) {
                console.log(err);
            }
            res.render('user-detail', { defaultAddress: defaultAddress, users: user, session: sess, items: sess.cart.generateArray() });
        });
    });
});

router.get('/change_detail', function(req, res, next) {
    var messages = req.flash('message');
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
        if (err) {
            console.log(err);
        }
        res.render('change-detail', { csrfToken: req.csrfToken(), messages: messages, anchor: '', user: user, session: sess, items: sess.cart.generateArray() });
    });
});

router.get('/address_note', function(req, res, next) {
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
                res.render('address-note', { addresses: addresses, defaultAddress: defaultAddress, users: user, session: sess, items: sess.cart.generateArray() });
            });
        });
    });
});

router.get('/add_address', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    res.render('add-address', { csrfToken: req.csrfToken(), session: sess, items: sess.cart.generateArray() });
});

router.get('/default/:id', function(req, res, next) {
    var addressId = req.params.id;
    UserAddress.update({ default: true }, { default: false }, function(err, result) {
        if (err) {
            console.log(err);
        }
        UserAddress.update({ _id: addressId }, { default: true }, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/users/address_note');
        });
    });
});

router.get('/delete/:id', function(req, res, next) {
    var addressId = req.params.id;
    UserAddress.remove({ _id: addressId }, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.redirect('/users/address_note');
    });
});

router.post('/add_address', function(req, res, next) {
    var sess = req.session;
    UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
        if (err) {
            console.log(err);
        }
        var Address = new UserAddress();
        Address.userId = user._id;
        Address.name = req.body.name;
        Address.telephone = req.body.telephone;
        Address.province = req.body.province;
        Address.district = req.body.district;
        Address.subdistrict = req.body.subdistrict;
        Address.street = req.body.street;
        Address.default = false;
        Address.save(function(err, result) {
            if (err) {
                console.log(err);
            }
            res.redirect('/users/address_note');
        });
    });
});

router.get('/change_detail/:anchor', function(req, res, next) {
    var messages = req.flash('message');
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    var anchor = req.params.anchor;

    console.log(anchor);

    UserProfile.findOne({ email: { $eq: sess.email } }, function(err, user) {
        if (err) {
            console.log(err);
        }
        res.render('change-detail', { csrfToken: req.csrfToken(), messages: messages, anchor: anchor, user: user, session: sess, items: sess.cart.generateArray() });
    });
});

router.post('/changeinfor/:id', function(req, res, next) {
    var userId = req.params.id;
    var name = req.body.name;
    var gender = req.body.gender;
    var day = req.body.day;
    var month = req.body.month;
    var year = req.body.year;
    var address = req.body.address;
    var telephone = req.body.telephone;
    UserProfile.update({ _id: userId }, { name: name, gender: gender, day: day, month: month, year: year, address: address, telephone: telephone }, function(err, result) {
        if (err) {
            console.log(err);
        }
        req.session.name = name;
        res.redirect('/users/user_detail');
    });
});

router.post('/changepassword/:id', function(req, res, next) {
    var userId = req.params.id;
    var oldPassword = req.body.oldpassword;
    var newPassword = req.body.newpassword;
    var confirmPassword = req.body.confirmpassword;
    UserProfile.findById(userId, function(err, user) {
        if (err) {
            console.log(err);
        }
        if (!user.validPassword(oldPassword)) {
            req.flash('message', 'Sai mật khẩu.');
            res.redirect(req.get('referer'));
        } else {
            if (newPassword != confirmPassword) {
                req.flash('message', 'Xác nhận mật khẩu không khớp.');
                res.redirect(req.get('referer'));
            } else {
                var password = user.encryptPassword(newPassword);
                UserProfile.update({ _id: userId }, { password: password }, function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    res.redirect('/users/user_detail');
                });
            }
        }
    });
});

module.exports = router;