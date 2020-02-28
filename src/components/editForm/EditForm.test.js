import React from 'react';
import { shallow } from 'enzyme';
import EditForm from './EditForm';
// import { SessionProvider } from '../../hooks/getAuth';

describe('EditForm component', () => {
  it('renders EditForm', () => {
    const wrapper = shallow(<EditForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
