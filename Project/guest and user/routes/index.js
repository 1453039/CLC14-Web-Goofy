var express = require('express');
var router = express.Router();
var books = require('../models/book');
var Cart = require('../models/cart');
var banners = require('../models/banner');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    banners.find(function(err, banners) {
        books.find(function(err, books) {
            res.render('index', { books: books, banners: banners, session: sess, items: sess.cart.generateArray() });
        });
    });
});

router.get('/logout', function(req, res, next) {
    req.session.email = null;
    req.session.name = null;
    req.session.cart = null;
    res.redirect('/');
});

router.get('/books', function(req, res, next) {
    books.find(function(err, book) {
        res.send(book);
    });
});

router.get('/add-to-cart/:id', function(req, res, next) {
    var bookId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });

    books.findById(bookId, function(err, book) {
        if (err) {
            return res.redirect(req.get('referer'));
        }
        cart.add(book, bookId);
        req.session.cart = cart;
        res.redirect(req.get('referer'));
    });
});

router.get('/muangay/:id', function(req, res, next) {
    var bookId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });

    books.findById(bookId, function(err, book) {
        if (err) {
            return res.redirect(req.get('referer'));
        }
        cart.add(book, bookId);
        req.session.cart = cart;
        res.redirect('/cart');
    });
});

router.get('/delete/:id', function(req, res, next) {
    var bookId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });

    cart.delete(bookId);
    req.session.cart = cart;
    res.redirect(req.get('referer'));
});

router.post('/search', function(req, res, next) {
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    var input_search = req.body.search;

    books.find({ "title": { '$regex': ".*" + input_search + ".*", '$options': 'i' } }, function(err, books) {
        if (err) {
            console.log(err);
        }
        res.render('search', { input_search: input_search, book: books, session: sess, items: sess.cart.generateArray() });
    });
});

module.exports = router;