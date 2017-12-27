var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        entry: './src/js/app.js'
    },
    output: {
        filename: './dist/bundle.js'
    }
    // ,plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};