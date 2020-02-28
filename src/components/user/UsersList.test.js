import React from 'react';
import { shallow } from 'enzyme';
import UsersList from './UsersList';

describe('UsersList component', () => {
  it('renders UsersList', () => {
    const wrapper = shallow(<UsersList />);
    expect(wrapper).toMatchSnapshot();
  });
});
