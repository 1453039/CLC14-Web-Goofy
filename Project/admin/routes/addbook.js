var express = require('express');
var router = express.Router();
var multer = require('multer')
var Book = require('../models/book');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg') //Appending .jpg
  }
})
var upload = multer({ storage: storage })

router.get('/', function(req, res, next) {
    if (!req.session.username) {
        req.flash('error', 'Please login first!');
        res.redirect('/login');
    } else {
        res.render('addbook', {
            title: 'Thêm sách mới', item: 'addbook'
        });
    }
});



router.post('/', function(req, res, next) {
    Book.findOne({
        'title': req.body.title
    }, function(err, book) {
        if (err) {
            console.log(err);
        }
        if (book) {
            req.flash('message', 'Sách đã tồn tại.');
            res.redirect('/addbook');
        } else {
            var newBook = new Book();
            newBook.title = req.body.title;
            newBook.author = req.body.author;
            newBook.type = req.body.type;
            newBook.category = req.body.category;
            newBook.oldprice = req.body.oldprice;
            newBook.discount = req.body.discount;
            newBook.newprice = newBook.oldprice - newBook.oldprice * newBook.discount / 100;
            newBook.saving = newBook.oldprice - newBook.newprice;
            newBook.cover = 'cover';
            newBook.summary = req.body.summary;
            newBook.description = req.body.description;
            newBook.publisher = req.body.publisher;
            newBook.publishing_company = req.body.publishing_company;
            newBook.quantity = req.body.quantity;
            newBook.size = req.body.size;
            newBook.weight = req.body.weight;
            newBook.view = 0;
            newBook.release_date = req.body.release_date;
            newBook.numberpage = req.body.numberpage;
            newBook.imagepathsmall = 'cover';
            newBook.imagepathmedium = 'cover';
            newBook.imagepathlarge = 'cover';

            newBook.save(function(err, result) {
                if (err) {
                    console.log(err);
                }
                console.log("Đã thêm sách");
                res.redirect('/addbook');
            });
        }
    });
});

router.post('/img',upload.any(),function(req,res){
	res.sendStatus(200);
});


module.exports = router;
