var express = require('express');
var router = express.Router();
var Order = require('../models/cart');

router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    res.render('order', {title: 'Đơn hàng', item: 'order'});
  }
});


module.exports = router;
