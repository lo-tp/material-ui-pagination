// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './example/index.jsx',
  ],
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'main.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.json/,
        exclude: /node_modules/,
        loader: 'json',
      },
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
