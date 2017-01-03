import React from 'react';
import Component from '../dist/index';
import TextField from 'material-ui/TextField';

export default class App extends React.Component {
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
    total = total.trim();
    if (total.match(/^\d+$/)) {
      this.setState({ total: parseInt(total, 10) });
    }
  }

  setDisplay(event, display) {
    display = display.trim();
    if (display.match(/^\d+$/)) {
      this.setState({ display: parseInt(display, 10) });
    }
  }

  render() {
    return (
      <div >
        <p >
          Now you are at
          <em
            style = { { color: 'red' } }
          >
            {` ${this.state.number} ` }
          </em>
          page
        </p>
        <TextField
          style = { { width: 340 } }
          onChange = { this.setTotal }
          value = { this.state.total }
          hintText = "How Many Pages Do You Have?"
          floatingLabelText = "How Many Pages Do You Have?"
        /><br />
        <TextField
          style = { { width: 340 } }
          onChange = { this.setDisplay }
          value = { this.state.display }
          hintText = "How Many Pages Do You Want to Display?"
          floatingLabelText = "How Many Pages Do You Want to Display?"
        />
        <Component
          total = { this.state.total }
          current = {  this.state.number }
          display = { this.state.display }
          onChange = { number => this.setState({ number }) }
        />
      </div>
    );
  }
}
