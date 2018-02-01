var express = require('express');
var router = express.Router();
var books = require('../models/book');

/*router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    res.render('booktype', {title: 'Danh mục'});
  }
});*/


router.get('/:name', function(req, res, next) {
    if (!req.session.username) {
        req.flash('error', 'Please login first!');
        res.redirect('/login');
    } else {
        var typename = req.params.name;
        typename = String(typename);
        switch (typename) {
            case "sachgiaokhoa":
                books.find({
                    type: {
                        $eq: 'Sách giáo khoa'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Sách giáo khoa',
                        item: 'sachgiaokhoa'
                    });
                });
                break;
            case "sachthamkhao":
                books.find({
                    type: {
                        $eq: 'Sách tham khảo'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Sách tham khảo',
                        item: 'sachthamkhao'
                    });
                });
                break;
            case "vanhoctrongnuoc":
                books.find({
                    type: {
                        $eq: 'Văn học trong nước'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Văn học trong nước',
                        item: 'vanhoctrongnuoc'
                    });
                });
                break;
            case "vanhocnuocngoai":
                books.find({
                    type: {
                        $eq: 'Văn học nước ngoài'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Văn học nước ngoài',
                        item: 'vanhocnuocngoai'
                    });
                });
                break;
            case "truyentranh":
                books.find({
                    type: {
                        $eq: 'Truyện tranh'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Truyện tranh',
                        item: 'truyentranh'
                    });
                });
                break;
            case "sachhocngoaingu":
                books.find({
                    type: {
                        $eq: 'Sách học ngoại ngữ'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Sách học ngoại ngữ',
                        item: 'sachhocngoaingu'
                    });
                });
                break;
            case "sachthieunhi":
                books.find({
                    type: {
                        $eq: 'Sách thiếu nhi'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Sách thiếu nhi',
                        item: 'sachthieunhi'
                    });
                });
                break;
            case "sachkynangsong":
                books.find({
                    type: {
                        $eq: 'Sách kỹ năng sống'
                    }
                }, function(err, book) {
                    res.render('booktype', {
                        book: book,
                        type: 'Sách kỹ năng sống',
                        item: 'sachkynangsong'
                    });
                });
                break;
        }
    }
});

module.exports = router;
