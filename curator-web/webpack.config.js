var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
module.exports = {
    entry:APP_DIR + '/js/index.js',
    output:{filename:DIST_DIR + '/js/bundle.js'},
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module:{
        loaders:[
            {
                test : /\.js$/,
                loader : 'babel',
                query:{
                    presets:['es2015', 'react']
                }
            },
            {
                test:/\.scss$/,
                loaders:['style', 'css', 'sass'],
                include: APP_DIR,
                exclude:/(node_modules|bower_components)/
            },
            {
                //.url loader will bundle up the image..
                //test: /\.png$/, loader: "url-loader?mimetype=image/png"
                test: /\.png$/, loader: "file?name=images/[hash].[ext]?"
            }
        ]
    },
    externals: { 'React': 'react'},
    resolve: {extensions: ['', '.js', '.jsx']}
}