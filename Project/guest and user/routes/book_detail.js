var express = require('express');
var router = express.Router();
var books = require('../models/book');
var Cart = require('../models/cart');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    var bookId = req.params.id;
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;

    books.findById(bookId, function(err, book) {
        books.find({ _id: { $ne: bookId }, type: { $eq: book.type } }, function(err, relatebooks) {
            res.render('book-detail', { book: book, relatebooks: relatebooks, session: sess, items: sess.cart.generateArray() });
        });
    });
});

module.exports = router;