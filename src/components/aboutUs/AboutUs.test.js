import React from 'react';
import { shallow } from 'enzyme';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('renders AboutUs', () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper).toMatchSnapshot();
  });
});
