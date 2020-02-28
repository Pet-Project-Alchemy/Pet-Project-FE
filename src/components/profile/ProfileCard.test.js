import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from './ProfileCard';

describe('ProfileCard component', () => {
  it('renders ProfileCard', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
