var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
//const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true    
  })
  .then( () => console.log(`Connected to database`))
  .catch( (err) => console.error(err));


  // CORS MIDDLEWARE SETUP
//app.use(
 // cors({
  //  credentials: true,
 //   origin: [process.env.PUBLIC_DOMAIN,'http://127.0.0.1'],
//  }),
//);

// SESSION MIDDLEWARE
app.use(
  session({
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60, // 1 day
    }),
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);

console.log('Server started');

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
  res.status(err.status || 500).send();
});

module.exports = app;
