var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');




var hbs = require('hbs');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use(express.static('node_modules'));

// app.engine( '.html', require('ejs').renderFile );  // 注册html模板引擎 
// app.set('view engine', 'html');

app.engine('html',hbs.__express);

// app.set('view engine', 'html');
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
// view engine setup

app.use(session({
	secret:'lyb',
	cookie:{maxAge:100000},
	resave:false,
	saveUninitialized:true
}))

// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// app.use('index',indexRouter);
// app.use('/users', usersRouter);
// app.use('/',loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
