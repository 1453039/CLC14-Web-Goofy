var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var login = require('./routes/login');
var dashboard = require('./routes/dashboard');
var order = require('./routes/order');
var updatebook = require('./routes/updatebook');
var addbook = require('./routes/addbook');
var orderdetail = require('./routes/orderdetail');
var memberdetail = require('./routes/memberdetail');
var member = require('./routes/member');
var banner = require('./routes/banner');
var booktype = require('./routes/booktype');



var app = express();

mongoose.connect('localhost:27017/bookstore');
//mongoose.connect('mongodb://member:14clcgoofy@g04-goofy-shard-00-00-96sb7.mongodb.net:27017,g04-goofy-shard-00-01-96sb7.mongodb.net:27017,g04-goofy-shard-00-02-96sb7.mongodb.net:27017/Goofy?ssl=true&replicaSet=G04-Goofy-shard-0&authSource=admin');

require('./config/passport');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
//app.use(validator());
//mongo "mongodb://g04-goofy-shard-00-00-96sb7.mongodb.net:27017,g04-goofy-shard-00-01-96sb7.mongodb.net:27017,g04-goofy-shard-00-02-96sb7.mongodb.net:27017/test?replicaSet=G04-Goofy-shard-0" --authenticationDatabase admin --ssl --username tnnq --password 14clcgoofy
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'MySuperSecret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {path: '/', httpOnly: true, maxAge: 30*30000},
  rolling: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use('/', index);
app.use('/login', login);
app.use('/dashboard', dashboard);
app.use('/logout', login);
app.use('/order', order);
app.use('/booktype', booktype);
app.use('/updatebook', updatebook);
app.use('/addbook', addbook);
app.use('/orderdetail',orderdetail);
app.use('/memberdetail',memberdetail);
app.use('/member',member);
app.use('/banner', banner);
app.use('/img',addbook);

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
