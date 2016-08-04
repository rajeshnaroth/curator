/**
 * Created by rnaroth on 3/31/16.
 */
var express = require('express');
var path = require('path');

var app = express();
var webpack = require('webpack')
var config = require('../webpack.config');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var routes = require('./routes/index');
var port = 5000;

// app.use(express.static(__dirname + 'dist'));
app.use('/dist',   express.static(__dirname + '/../dist'));
app.use('/vendor', express.static(__dirname + '/../node_modules'));
app.use('/images', express.static(__dirname + '/../src/assets/images'));

//app.use('/css', express.static(__dirname + '/src/css'));
app.use('/', routes);

//Webpack config
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {colors: true}
}));
app.use(webpackHotMiddleware(compiler, {
    log: console.log
}));

app.listen(port, function () {
    console.log('Application running on port ', port);
});
