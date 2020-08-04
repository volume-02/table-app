import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('Should render preloader', () => {
  const conponent = shallow(<App />);
  expect(conponent).toMatchSnapshot();
});
