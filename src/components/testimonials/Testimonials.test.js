import React from 'react';
import { shallow } from 'enzyme';
import Testimonials from './Testimonials';

describe('Testimonials component', () => {
  it('renders Testimonials', () => {
    const wrapper = shallow(<Testimonials />);
    expect(wrapper).toMatchSnapshot();
  });
});
