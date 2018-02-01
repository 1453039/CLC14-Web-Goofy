var express = require('express');
var router = express.Router();
var books = require('../models/book');
var Cart = require('../models/cart');

router.get('/:id', function(req, res, next) {
    var typeId = req.params.id;
    typeId = parseInt(typeId);
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    switch (typeId) {
        case 1:
            books.find({ type: { $eq: 'Sách giáo khoa' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Sách giáo khoa', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 2:
            books.find({ type: { $eq: 'Sách tham khảo' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Sách tham khảo', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 3:
            books.find({ type: { $eq: 'Văn học trong nước' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Văn học trong nước', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 4:
            books.find({ type: { $eq: 'Văn học nước ngoài' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Văn học nước ngoài', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 5:
            books.find({ type: { $eq: 'Truyện tranh' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Truyện tranh', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 6:
            books.find({ type: { $eq: 'Sách học ngoại ngữ' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Sách học ngoại ngữ', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 7:
            books.find({ type: { $eq: 'Sách thiếu nhi' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Sách thiếu nhi', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 8:
            books.find({ type: { $eq: 'Sách kỹ năng sống' } }, function(err, book) {
                res.render('book-type', { book: book, type: 'Sách kỹ năng sống', session: sess, items: sess.cart.generateArray() });
            });
            break;
    }
});

module.exports = router;