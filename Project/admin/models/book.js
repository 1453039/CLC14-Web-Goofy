var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    newprice: { type: Number, required: true },
    oldprice: { type: Number, required: true },
    discount: { type: Number, required: true },
    saving: { type: Number, required: true },
    cover: { type: String, required: true },
    summary: { type: String, required: false },
    description: { type: String, required: false },
    publisher: { type: String, required: true },
    publishing_company: { type: String, required: true },
    numberpage: { type: String, required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    weight: { type: String, required: true },
    view: { type: Number, required: true },
    release_date: { type: Date, required: true },
    imagepathsmall: { type: String, required: true },
    imagepathmedium: { type: String, required: true },
    imagepathlarge: { type: String, required: true }
});

module.exports = mongoose.model('Book', schema);
