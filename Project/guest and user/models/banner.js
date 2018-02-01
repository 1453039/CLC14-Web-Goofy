var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('../models/book');

var schema = new Schema({
    bookid: [{ type: Schema.Types.ObjectId, ref: Book }],
    imagepath: { type: String, required: true }
});

module.exports = mongoose.model('Banner', schema);