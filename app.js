var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var dbConnection = require('./middle-ware/db-connection');

var route = require('./routes/route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:'XUST_DS', resave: false, saveUninitialized: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(dbConnection);

route.setRoutes(app);


module.exports = app;
