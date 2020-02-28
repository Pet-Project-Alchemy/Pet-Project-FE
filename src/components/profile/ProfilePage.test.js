import React from 'react';
import { shallow } from 'enzyme';
import ProfilePage from './ProfilePage';

describe('ProfilePage component', () => {
  it('renders ProfilePage', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper).toMatchSnapshot();
  });
});