import React from 'react';
import { shallow } from 'enzyme';
import ExplorePage from './ExplorePage';

describe('ExplorePage component', () => {
  it('renders ExplorePage', () => {
    const wrapper = shallow(<ExplorePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
