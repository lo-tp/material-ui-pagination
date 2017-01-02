import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// eslint-disable-next-line import/no-named-as-default
import App from './app';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider >
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./app').default;
    ReactDOM.render(
      <MuiThemeProvider >
        <NewApp />
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  });
}
