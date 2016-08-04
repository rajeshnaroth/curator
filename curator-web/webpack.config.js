var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
module.exports = {
    entry:APP_DIR + '/js/index.js',
    output:{
        path:DIST_DIR,
        publicPath: '/assets/',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test : /\.js$/,
                include: APP_DIR,
                loader : 'babel',
                query:{
                    presets:['es2015', 'react']
                }
            }, {
                test:/\.scss$/,
                include: APP_DIR,
                exclude:/(node_modules)/,
                loaders:['style', 'css', 'sass']
            }, {
                //.url loader will bundle up the image..
                //test: /\.png$/, loader: "url-loader?mimetype=image/png"
                test: /\.png$/, loader: "file?name=images/[hash].[ext]?"
            }
        ]
    },
    externals: { 'React': 'react'},
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}