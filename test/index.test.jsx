import React from 'react';
import { shallow, mount } from 'enzyme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Index from '../dist/index';

injectTapEventPlugin();

describe('props and state related test', () => {
  it('correspondance between props and state', () => {
    const index = shallow(
      <Index
        total = { 100 }
        current = { 20 }
        display = { 10 }
      />,
    );
    expect(index.state('total')).toEqual(100);
    expect(index.state('current')).toEqual(20);
    expect(index.state('display')).toEqual(10);
  });

  it('total, current and display should be at least 1', () => {
    const index = shallow(
      <Index
        total = { -1 }
        current = { -1 }
        display = { -1 }
      />,
    );
    expect(index.state('total')).toEqual(1);
    expect(index.state('current')).toEqual(1);
    expect(index.state('display')).toEqual(1);
  });

  it('display and current should never be greater than total', () => {
    const index = shallow(
      <Index
        total = { 10 }
        current = { 20 }
        display = { 30 }
      />,
    );
    expect(index.state('current')).toEqual(10);
    expect(index.state('display')).toEqual(10);
  });
});

describe('range calculation', () => {
  const index = mount(
    <Index
      total = { 10 }
      current = { 1 }
      display = { 30 }
    />, {
      context: {
        muiTheme: getMuiTheme(darkBaseTheme),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      },
    }
  );

  it('start should be 1 and end shoulbe be total when display === total', () => {
    expect(index.state('start')).toEqual(1);
    expect(index.state('end')).toEqual(10);
  });
  it('recalculate should happen when chaning props', () => {
    // Start shoud be 1
    index.setProps({
      current: 1,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(1);
    expect(index.state('end')).toEqual(5);

    index.setProps({
      current: 3,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(1);
    expect(index.state('end')).toEqual(5);

    // Start should not be 1 and end should not be total
    index.setProps({
      current: 4,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(2);
    expect(index.state('end')).toEqual(6);

    index.setProps({
      current: 7,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(5);
    expect(index.state('end')).toEqual(9);

    // end should be total
    index.setProps({
      current: 8,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(6);
    expect(index.state('end')).toEqual(10);

    index.setProps({
      current: 10,
      display: 5,
      total: 10,
    });
    expect(index.state('start')).toEqual(6);
    expect(index.state('end')).toEqual(10);
  });
  it('edge cases', () => {
    index.setProps({
      current: 3,
      display: 10,
      total: 2,
    });
    expect(index.state('start')).toEqual(1);
    expect(index.state('end')).toEqual(2);
  });
});
