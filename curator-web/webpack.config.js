var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');
module.exports = {
    entry:[
        //'webpack-dev-server/client?http://localhost:5000',
        //'webpack/hot/only-dev-server',
        'babel-polyfill', 
        APP_DIR + '/js/index.js'
    ],
    output:{
        path:DIST_DIR,
        publicPath: '/assets/',
        filename:'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
        })
        //,new webpack.HotModuleReplacementPlugin()
        
    ],
    module:{
        loaders:[
            {
                test : /\.js$/,
                include: APP_DIR,
                loaders : ['babel'],
                //loaders : ['react-hot', 'babel'],
                // query:{
                //     presets:['es2015', 'react']
                // }
            }, 
            {
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }, 
            {
                test:/\.scss$/,
                include: APP_DIR,
                exclude:/(node_modules)/,
                loaders:['style', 'css', 'sass']
            }, 
            {
                test: /\.png$/, loader: "file?name=images/[hash].[ext]?"
            }, 
            {
                test: /\.png$/, 
                loader: "url-loader?limit=100000" 
            }, 
            {
                test: /\.jpg$/, 
                loader: "file-loader" 
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    devtool: 'inline-source-map',
    //devtool: 'cheap-module-source-map',
    externals: { 'React': 'react'},
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
//new webpack.HotModuleReplacementPlugin()
//loaders : ['react-hot', 'babel'],
//    devtool: 'cheap-module-source-map',

// devtool: 'inline-source-map',
