import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from './PrivateRoute';

describe('PrivateRoute component', () => {
  it('renders PrivateRoute', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
