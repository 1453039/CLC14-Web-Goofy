var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    res.render('banner', {title: 'Thêm banner quảng cáo', item: "banner"});
  }
});


module.exports = router;
