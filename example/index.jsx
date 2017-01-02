import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/no-named-as-default
import App from './app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./app').default;
    ReactDOM.render(
      <NewApp />,
      document.getElementById('root')
    );
  });
}
