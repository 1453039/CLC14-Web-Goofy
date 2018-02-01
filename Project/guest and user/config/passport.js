var passport = require('passport');
var UserProfile = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    UserProfile.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local.register', new LocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    nameField: 'name',
    genderField: 'gender',
    dayField: 'day',
    monthField: 'month',
    yearField: 'year',
    addressField: 'address',
    telephoneField: 'telephone',
    passReqToCallback: true
}, function(req, email, password, name, gender, day, month, year, address, telephone, done) {
    req.checkBody('email', 'Email không hợp lệ.').notEmpty().isEmail();
    req.checkBody('re-password', 'Xác nhận mật khẩu không khớp.').equals(password, false);
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('message', messages));
    }
    UserProfile.findOne({ 'email': email }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, req.flash('message', 'Email đã được sử dụng.'));
        }
        var newUser = new UserProfile();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        newUser.name = name;
        newUser.gender = gender;
        newUser.day = day;
        newUser.month = month;
        newUser.year = year;
        newUser.address = address;
        newUser.telephone = telephone;
        newUser.status = 'active';
        newUser.save(function(err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });
    });
}));

passport.use('local.login', new LocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    nameField: 'name',
    genderField: 'gender',
    dayField: 'day',
    monthField: 'month',
    yearField: 'year',
    addressField: 'address',
    telephoneField: 'telephone',
    passReqToCallback: true
}, function(req, email, password, name, gender, day, month, year, address, telephone, done) {
    UserProfile.findOne({ 'email': email }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, req.flash('error', 'Không tìm thấy Email.'));
        } else {
            if (!user.validPassword(password)) {
                return done(null, false, req.flash('error', 'Sai mật khẩu.'));
            } else {
                req.session.email = user.email;
                req.session.name = user.name;
                return done(null, user);
            }
        }
    });
}));