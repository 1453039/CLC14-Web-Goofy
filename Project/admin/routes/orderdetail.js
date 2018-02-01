var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    res.render('orderdetail', {title: 'Chi tiết đơn hàng', item: 'orderdetail'});
  }
});


module.exports = router;
