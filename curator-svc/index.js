var express = require('express');
var path = require('path');

var index = require('./routes/index');
var filmlist = require('./routes/filmlist');
var app = express();

// global controller
app.get('/*',function(req,res,next){
    res.header('Content-type' , 'text/json' );
    next();
});
app.use('/', index);
app.use('/filmlist', filmlist);

// Express boilerplate..
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            status: err.status,
            message: err.message,
            error: err,
            stack:err.stack
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        status: err.status,
        message: err.message,
        error: err.stack
    });
});

module.exports = app;