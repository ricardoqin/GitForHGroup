var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');//mongoose组件，对于js操作mongosdb的封装。model对应集合，以模型来操作mongoose，mongoose.model('user')后，数据库中就会创建一个user的集合
var session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//自定义路由在此
var registerRouter = require('./routes/registerreq');
var loginRouter = require('./routes/loginreq');
var isonline = require('./routes/isonline');
var userInfo = require('./routes/userInfo');
//var register1 = require('./register1')


//---------连接数据库---前提先引入
mongoose.connect("mongodb://localhost:27017/mongoforHgroup");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//配置session使用express-session模块，需安装
app.use(session({
	name:"HgroupSessID",//自定义名字,这是在客户端创建的cookie的值
	secret:"dw3243dw",//加密信息，越长越安全
	cookie:{maxAge:1000*3600},//保存时间
	resave:true,
	saveUninitialized:true
}));
	



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register1',usersRouter);
app.use('/registerreq',registerRouter);
app.use('/loginreq',loginRouter);
app.use('/isonline',isonline)
app.use('/userInfoBK',userInfo)


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
