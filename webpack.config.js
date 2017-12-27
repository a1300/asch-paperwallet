var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


console.log(webpack);


module.exports = {
    entry: {
        entry: './entry.js'
    },
    output: {
        filename: './dist/bundle.js'
    }
    // ,plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
};