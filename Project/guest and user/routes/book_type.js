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
                var category = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9", "Lớp 10", "Lớp 11", "Lớp 12"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Sách giáo khoa', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 2:
            books.find({ type: { $eq: 'Sách tham khảo' } }, function(err, book) {
                var category = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9", "Lớp 10", "Lớp 11", "Lớp 12"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Sách tham khảo', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 3:
            books.find({ type: { $eq: 'Văn học trong nước' } }, function(err, book) {
                var category = ["Tiểu thuyết", "Truyện ngắn - Tản văn", "Huyền bí - Giả tưởng", "Phóng sự - Kí sự", "Trinh thám - Kinh dị", "Tiểu sử - Hồi ký"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Văn học trong nước', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 4:
            books.find({ type: { $eq: 'Văn học nước ngoài' } }, function(err, book) {
                var category = ["Tiểu sử - Hồi ký", "Truyện lịch sử - Kiếm hiệp", "Truyện ngắn - Tản văn", "Tác phẩm kinh điển", "Huyền bí - Giả tưởng", "Tiểu thuyết", "Trinh thám - Kinh dị", "Tiểu thuyết tình cảm - Lãng mạn", "Bách hợp"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Văn học nước ngoài', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 5:
            books.find({ type: { $eq: 'Truyện tranh' } }, function(err, book) {
                var category = ["Truyện tranh Nhật Bản", "Truyện tranh Hàn Quốc", "Truyện tranh Trung Quốc", "Truyện tranh phương Tây"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Truyện tranh', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 6:
            books.find({ type: { $eq: 'Sách học ngoại ngữ' } }, function(err, book) {
                var category = ["Từ điển", "Sách Học Tiếng Anh", "Sách Học Tiếng Nhật", "Sách Học Tiếng Hoa"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Sách học ngoại ngữ', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 7:
            books.find({ type: { $eq: 'Sách thiếu nhi' } }, function(err, book) {
                var category = ["Truyện cổ tích - Thần thoại", "Vừa học vừa chơi", "Kiến thức - Kỹ năng", "Văn học", "Truyện kể bé nghe"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Sách thiếu nhi', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 8:
            books.find({ type: { $eq: 'Sách kỹ năng sống' } }, function(err, book) {
                var category = ["Kỹ năng sống", "Nghệ thuật sống đẹp"];
                res.render('book-type', { book: book, categories: category, typeId: typeId, type: 'Sách kỹ năng sống', session: sess, items: sess.cart.generateArray() });
            });
            break;
    }
});

router.get('/:id/:type', function(req, res, next) {
    var typeId = req.params.id;
    typeId = parseInt(typeId);
    var categoryId = req.params.type;
    categoryId = parseInt(categoryId);
    req.session.cart = new Cart(req.session.cart ? req.session.cart : { item: {}, totalQty: 0, totalPrice: 0 });
    var sess = req.session;
    switch (typeId) {
        case 1:
            var category = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9", "Lớp 10", "Lớp 11", "Lớp 12"];
            var category_title;
            for (var i = 1; i <= 12; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Sách giáo khoa' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Sách giáo khoa', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 2:
            var category = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9", "Lớp 10", "Lớp 11", "Lớp 12"];
            var category_title;
            for (var i = 1; i <= 12; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Sách tham khảo' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Sách tham khảo', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 3:
            var category = ["Tiểu thuyết", "Truyện ngắn - Tản văn", "Huyền bí - Giả tưởng", "Phóng sự - Kí sự", "Trinh thám - Kinh dị", "Tiểu sử - Hồi ký"];
            var category_title;
            for (var i = 1; i <= 6; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Văn học trong nước' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Văn học trong nước', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 4:
            var category = ["Tiểu sử - Hồi ký", "Truyện lịch sử - Kiếm hiệp", "Truyện ngắn - Tản văn", "Tác phẩm kinh điển", "Huyền bí - Giả tưởng", "Tiểu thuyết", "Trinh thám - Kinh dị", "Tiểu thuyết tình cảm - Lãng mạn", "Bách hợp"];
            var category_title;
            for (var i = 1; i <= 9; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Văn học nước ngoài' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Văn học nước ngoài', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 5:
            var category = ["Truyện tranh Nhật Bản", "Truyện tranh Hàn Quốc", "Truyện tranh Trung Quốc", "Truyện tranh phương Tây"];
            var category_title;
            for (var i = 1; i <= 4; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Truyện tranh' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Truyện tranh', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 6:
            var category = ["Từ điển", "Sách Học Tiếng Anh", "Sách Học Tiếng Nhật", "Sách Học Tiếng Hoa"];
            var category_title;
            for (var i = 1; i <= 4; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Sách học ngoại ngữ' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Sách học ngoại ngữ', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 7:
            var category = ["Truyện cổ tích - Thần thoại", "Vừa học vừa chơi", "Kiến thức - Kỹ năng", "Văn học", "Truyện kể bé nghe"];
            var category_title;
            for (var i = 1; i <= 5; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Sách thiếu nhi' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Sách thiếu nhi', session: sess, items: sess.cart.generateArray() });
            });
            break;
        case 8:
            var category = ["Kỹ năng sống", "Nghệ thuật sống đẹp"];
            var category_title;
            for (var i = 1; i <= 2; i++) {
                if (categoryId == i) {
                    category_title = category[i - 1];
                }
            }
            books.find({ type: { $eq: 'Sách kỹ năng sống' }, category: category_title }, function(err, book) {
                res.render('book-type-category', { book: book, categories: category, category_title: category_title, typeId: typeId, type: 'Sách kỹ năng sống', session: sess, items: sess.cart.generateArray() });
            });
            break;
    }
});


module.exports = router;