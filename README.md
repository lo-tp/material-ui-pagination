# material-ui-pagination

[![Build Status](https://travis-ci.org/lo-tp/material-ui-pagination.svg?branch=master)](https://travis-ci.org/lo-tp/material-ui-pagination)

An easy to use and customizable pagination component for material ui.

Play with this [demo](http://blog.lotp.xyz/demo/material-ui-pagination/) to see how it works.

![Demonstration](https://cloud.githubusercontent.com/assets/6308071/21675486/e541a024-d36c-11e6-9d41-622c6262601f.gif)
### Notice
---
Because some upstream [modification about the click event](https://github.com/callemall/material-ui/releases/tag/v0.19.0) made to the `material-ui` repo, I have to make some changes in response.

You can check what I have done in [issue16](https://github.com/lo-tp/material-ui-pagination/issues/16#issuecomment-323790709).

- Now for the newest version, you can install by `npm install material-ui-pagination@next`.
- Otherwise go with the stable version by `npm install mateiral-ui-pagination`.


### Quick Start
---
- `npm install material-ui-pagination`
- `import Pagination from 'material-ui-pagination'`;

### Usage
---
material-ui-pagination exposes one module called, `Pagination`, which accepts a few props:

Option               | Description              
---------------------|-----------------------------------------------
`total`              | Total number of pages
`display`            | Number of pages you want to show in the panel
`current`            | Current page selected
`onChange`           | Handles the change event of selected page: `function(value: integer) => void`
`styleRoot`          | Styles for root element
`styleFirstPageLink` | Styles for `FirstPageLink`. If not provided, a `NavigationFirstPage` from `Material UI` will be rendered as default, otherwise `<div>` with styles will show up instead
`styleLastPageLink`  | Styles for `LastPageLink`. If not provided, a `NavigationLastPage` from `Material UI` will be rendered as default, otherwise `<div>` with styles will show up instead
`styleButton`        | Styles for page number button. If not provided, a `FlatButton` from `Material UI` will be rendered as default, otherwise `<div>` with styles will show up instead
`stylePrimary`       | Styles for active page element. Requires the `styleButton` 


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
import Pagination from 'material-ui-pagination';

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
        <Pagination
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
