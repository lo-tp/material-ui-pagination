const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  noInfo: false,
}));

app.use(hotMiddleware(compiler));

app.use((req, res, next) => {
  if (req.originalUrl.match(/^\/static/)) {
    next();
  } else {
    res.sendFile(path.join(__dirname, '/static', 'index.html'));
  }
});

app.use('/static', express.static('static'));

// app.get('*', function (req, res) {
// res.sendFile(path.join(__dirname, 'static', 'index.html'));
// });

// app.get('*.css', function (req, res) {
// res.sendFile(path.join(__dirname, 'static', 'semantic.css'));
// });

app.listen(7890, err => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:7890/');
});
