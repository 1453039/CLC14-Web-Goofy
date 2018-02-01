var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var validator = require('express-validator');
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var register = require('./routes/register');
var book_detail = require('./routes/book_detail');
var book_type = require('./routes/book_type');
var cart = require('./routes/cart');
var order = require('./routes/order');

var execute = require('./routes/execute');
var cancel = require('./routes/cancel');

var app = express();
var paypal = require('paypal-rest-sdk');
var fs = require('fs');

try {
    var configJSON = fs.readFileSync(__dirname + "/config.json");
    var config = JSON.parse(configJSON.toString());
} catch (e) {
    console.error("File config.json not found or is invalid: " + e.message);
    process.exit(1);
}

paypal.configure(config.api);
mongoose.connect('mongodb://tnnq:14clcgoofy@g04-goofy-shard-00-00-96sb7.mongodb.net:27017,g04-goofy-shard-00-01-96sb7.mongodb.net:27017,g04-goofy-shard-00-02-96sb7.mongodb.net:27017/Goofy?ssl=true&replicaSet=G04-Goofy-shard-0&authSource=admin');
// mongoose.connect('localhost:27017/Goofy');
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'MySuperSecret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { path: '/', httpOnly: true, maxAge: 30 * 30000 },
    rolling: true
}));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(validator());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/register', register);
app.use('/book_detail', book_detail);
app.use('/book_type', book_type);
app.use('/cart', cart);
app.use('/order', order);

app.get('/execute', execute);
app.get('/cancel', cancel);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;