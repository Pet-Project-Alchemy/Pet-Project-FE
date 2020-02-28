import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import { SessionProvider } from '../../hooks/getAuth';

describe('Nav component', () => {
  it('renders Nav', () => {
    const wrapper = shallow(
      <SessionProvider>
        <Nav />
      </SessionProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
