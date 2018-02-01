var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserProfile = require('../models/user');

var schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: UserProfile },
    name: { type: String, required: true },
    telephone: { type: String, required: true },
    province: { type: String, required: true },
    district: { type: String, required: true },
    subdistrict: { type: String, required: true },
    street: { type: String, required: true },
    default: { type: Boolean, required: true }
});

module.exports = mongoose.model('User_Address', schema);