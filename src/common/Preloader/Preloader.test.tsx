import React from 'react';
import Preloader from './Preloader';
import { shallow } from 'enzyme';

describe('Preloader', () => {
  it('Should render preloader', () => {
    const component = shallow(<Preloader />);
    expect(component).toMatchSnapshot();
  });

  it('hello', () => {
    const foo = shallow(
      <h1>
        <div>hello</div>
      </h1>
    );
    expect(foo).toMatchSnapshot();
  });
});
