import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';

describe('Signup component', () => {
  it('renders Signup', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toMatchSnapshot();
  });
});
