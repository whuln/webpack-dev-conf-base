const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../bin'),       
        filename: '[name].boundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: '../bin', //webpack-dev-server 热加载
      hot: true,
      https:true,
      compress: true,
      port: 9000
    },
    module: {
        rules: [{//babel es6->es5
            test: /\.js$/,
            include:[ path.resolve(__dirname, "../src")],
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                plugins: [
                    'transform-object-rest-spread'
                ]
            }

        }]
    },
    plugins:[ 
        new CleanWebpackPlugin(['../bin']),       
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template:path.resolve(__dirname,'../index.html'),
            filename:'index.html'
         }),
    ]
}