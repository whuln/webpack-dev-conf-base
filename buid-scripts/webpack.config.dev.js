const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js'),
        vendors: ['vue']
    },
    output: {
        path: path.resolve(__dirname, '../bin'),
        filename: '[name].boundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../bin', //webpack-dev-server 热加载
        hot: true,
        compress: true,
        port: 9000
    },
    module: {
        rules: [{ //babel es6->es5
            test: /\.js$/,
            include: [path.resolve(__dirname, "../src")],
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                plugins: [
                    'transform-object-rest-spread'
                ]
            }

        }, {
            test: /\.vue$/,
            include: [path.resolve(__dirname, "../src")],
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            include: [path.resolve(__dirname, "../src")],
            loader: 'css-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['../bin']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.[hash].js',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html'
        }),
    ],
    resolve: {
        extensions: ['.css', '.js', '.vue', '.json'],
        alias: {
            'vue$': path.resolve(__dirname, '../node_modules/vue/dist/vue.common.js')
        }
    }
}