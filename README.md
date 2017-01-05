

## material-ui-pagination
----
An easy to use and customizable pagination component for material ui.

Play with this [demo](http://blog.lotp.xyz/demo/material-ui-pagination/) to see how it works.

<img src="./docs/img/demonstrastion.gif" alt="Demo" />

### Quick Start
---
- `npm install material-ui-pagination`
- `import Pagination from 'material-ui-pagination'`;

### Usage
---
material-ui-pagination exposes one module called, `Pagination`, which accepts 4 props:

- `total`: total number of pages.
- `display`: number of pages you want to show in the panel.
- `current`: current page selected.
- `onChange`: handles the change event of selected page
    
  `function(value: integer) => void`

### Run Local Demo
---

- `git clone https://github.com/lo-tp/material-ui-pagination`
- `npm install`
- `npm run dev-server`
- visit `http://localhost:7890/`

### Run test
---

- `git clone https://github.com/lo-tp/material-ui-pagination`
- `npm install`
- `npm run test`

### Code Example
---
``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Component from '../dist/index';

injectTapEventPlugin();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setTotal = this.setTotal.bind(this);
    this.setDisplay = this.setDisplay.bind(this);
    this.state = {
      total: 20,
      display: 7,
      number: 7,
    };
  }

  setTotal(event, total) {
    // eslint-disable-next-line no-param-reassign
    total = total.trim();
    if (total.match(/^\d*$/)) {
      if (total !== '') {
        // eslint-disable-next-line no-param-reassign
        total = parseInt(total, 10);
      } else {
        // eslint-disable-next-line no-param-reassign
        total = 0;
      }

      this.setState({ total });
    }
  }

  setDisplay(event, display) {
    // eslint-disable-next-line no-param-reassign
    display = display.trim();
    if (display.match(/^\d*$/)) {
      if (display !== '') {
        // eslint-disable-next-line no-param-reassign
        display = parseInt(display, 10);
      } else {
        // eslint-disable-next-line no-param-reassign
        display = 0;
      }

      this.setState({ display });
    }
  }

  render() {
    return (
      <div
        style = { {
          width: 500,
          margin: '0 auto',
        } }
      >
        <h3 >
          Now you are at
          <em
            style = { { color: 'red' } }
          >
            {` ${this.state.number} ` }
          </em>
          page
        </h3>
        <Component
          total = { this.state.total }
          current = { this.state.number }
          display = { this.state.display }
          onChange = { number => this.setState({ number }) }
        />
      </div>
    );
  }
}

ReactDOM.render(
  <MuiThemeProvider >
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
```
