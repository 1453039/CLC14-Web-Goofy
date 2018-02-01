var express = require('express');
var router = express.Router();
var members = require('../models/member');
/*
router.get('/', function(req, res, next) {
  if (!req.session.username){
    req.flash('error', 'Please login first!');
    res.redirect('/login');
  }
  else {
    members.find(function(err, members) {
        res.render('member', {
            title: 'Thành viên',
            member: members,
            item: 'member',
            length: members.length
        });
    });
  }
});
*/


router.get('/', function(req, res, next) {
    if (!req.session.username) {
        req.flash('error', 'Please login first!');
        res.redirect('/login');
    } else {
        members.find({}, function(err, member) {
            res.render('member', {
                title: 'Thành viên',
                member: member,
                item: 'member',
                length: members.length
            });
        });
    }
});


module.exports = router;
