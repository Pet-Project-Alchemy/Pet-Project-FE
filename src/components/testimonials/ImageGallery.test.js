import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from './ImageGallery';

describe('ImageGallery component', () => {
  it('renders ImageGallery', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper).toMatchSnapshot();
  });
});
