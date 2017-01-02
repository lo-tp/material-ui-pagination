// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const path = require('path');
const config = require('./config');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    library: config.library,
    libraryTarget: config.libraryTarget,
    filename: 'index.js',
  },
  externals: config.externals,
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
  },
};
