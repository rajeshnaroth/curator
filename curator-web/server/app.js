/**
 * Created by rnaroth on 3/31/16.
 */
var express = require('express');
var path = require('path');

var app = express();
var routes = require('./routes/index');
var port = 5000;

// app.use(express.static(__dirname + 'dist'));
app.use('/dist', express.static('dist'));
app.use('/vendor', express.static('node_modules'));
app.use('/images', express.static('images'));

//app.use('/css', express.static(__dirname + '/src/css'));
app.use('/', routes);

app.listen(port, function () {
    console.log('Application runnign on port ', port);
});
