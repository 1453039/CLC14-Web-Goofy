    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var schema = new Schema({
        items: { type: String, required: true },
        totalQty: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
    });
    module.exports = mongoose.model('Order', schema);
