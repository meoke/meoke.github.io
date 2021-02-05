var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 12000
    },
    plugins: [new HtmlWebpackPlugin(
        {
            filename: 'index.html',
            template: './src/index.html'
        }
    )],
    module: {
        rules: [
        {
          exclude: /node_modules/,
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        }
      ]},
};