// From https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack
var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ], //run in Chrome
        singleRun: false, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],
        files: [
            'test/webpack.js' //just load this file
        ],
        preprocessors: {
            'test/webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        reporters: [ 'dots' ], //report results in this format
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' },
                    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
                    { test: /\.png$/, loader: "file?name=images/[hash].[ext]?"}
                ]
            }
        },
        webpackServer: {
            //noInfo: true //please don't spam the console when running in karma!
        }
    });
};