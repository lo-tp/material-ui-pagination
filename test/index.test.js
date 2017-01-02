import React from 'react';
import { shallow } from 'enzyme';

import Index from '../dist/index';

it('First test', () => {
  const index = shallow(
    <Index />,
  );
  expect(index.text()).toEqual('hello world');
});
