var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    res.render('updatebook', {title: 'Chỉnh sửa thông tin', item: 'updatebook'});
  }
});


module.exports = router;
