/**
* Module Dependencies
*/

require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var mongoose = require('mongoose');

//routes
var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var testBackendRouter = require('./routes/testBackend');

//open connection to the database
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PW;

let dbConnectionString = 'mongodb+srv://' + dbUser + ':' + dbPassword + '@cluster0-xfa8b.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db = mongoose.connection;

//connection status notifications
db.once('open', ()=>console.log(`Connected to the database`));
db.on('error', ()=>console.error.bind(console, 'MongoDb connection error'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.  json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/testBackend', testBackendRouter);

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
