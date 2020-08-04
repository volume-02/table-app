import React from 'react';
import Preloader from './Preloader';
import { shallow } from 'enzyme';

it('Should render preloader', () => {
  const conponent = shallow(<Preloader />);
  expect(conponent).toMatchSnapshot();
});
