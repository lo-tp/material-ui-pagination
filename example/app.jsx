import React from 'react';
import TextField from 'material-ui/TextField';
import Component from '../dist/index';

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
        <TextField
          style = { { width: 340 } }
          onChange = { this.setTotal }
          value = { this.state.total }
          hintText = 'How Many Pages Do You Have?'
          floatingLabelText = 'How Many Pages Do You Have?'
        /><br />
        <TextField
          style = { { width: 340 } }
          onChange = { this.setDisplay }
          value = { this.state.display }
          hintText = 'How Many Pages Do You Want to Display?'
          floatingLabelText = 'How Many Pages Do You Want to Display?'
        />
        <Component
          total = { this.state.total }
          current = { this.state.number }
          display = { this.state.display }
          onChange = { number => this.setState({ number }) }
        />
        <Component
          total = { this.state.total }
          current = { this.state.number }
          display = { this.state.display }
          onChange = { number => this.setState({ number }) }
          styleRoot = { { marginTop: '30px' } }
          styleFirstPageLink = {
            {
              border: '8px solid transparent',
              borderRight: '8px solid forestgreen',
              display: 'inline-block',
              verticalAlign: 'text-top',
              cursor: 'pointer'
            }
          }
          styleLastPageLink = {
            {
              border: '8px solid transparent',
              borderLeft: '8px solid red',
              display: 'inline-block',
              verticalAlign: 'text-top',
              cursor: 'pointer'
            }
          }
          styleButton = {
            {
              color: 'blue',
              fontWeight: '700',
              display: 'inline-block',
              verticalAlign: 'text-bottom',
              padding: '0 10px',
              cursor: 'pointer'
            }
          }
          stylePrimary = {
            {
              color: 'blue',
              fontWeight: '400',
              backgroundColor: 'sandybrown',
              display: 'inline-block',
              verticalAlign: 'text-bottom',
              padding: '0 10px',
              cursor: 'pointer'
            }
          }
        />
      </div>
    );
  }
}

export default App;
