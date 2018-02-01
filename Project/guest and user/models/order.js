var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('../models/book');

var schema = new Schema({
    email: { type: String, required: true },
    total: { type: Number, required: true },
    shipfee: { type: Number, required: true },
    date_purchase: { type: Date, required: true },
    book: [{
        bookId: { type: Schema.Types.ObjectId, ref: Book },
        title: String,
        price: Number,
        num: Number
    }]
});

module.exports = mongoose.model('Order', schema);