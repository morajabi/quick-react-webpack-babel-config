const webpack = require('webpack');
const path = require('path');

const config = {

  // Where entry?
  entry: path.resolve('src/index.js'),

  // Where to put bundled file?
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
      }
    ]
  },

  // Dev server
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }

};

module.exports = config;
