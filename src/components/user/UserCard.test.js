import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

describe('UserCard component', () => {
  it('renders UserCard', () => {
    const wrapper = shallow(<UserCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
