var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        entry: './src/app.js'
    },
    output: {
        filename: './dist/bundle.js'
    }
};