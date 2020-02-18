import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('AppComponent', () => {
  it('check if parameterState changes', () => {
    const wrapper = mount(<App />);
    wrapper.instance().sortByParameter("age");
    expect(wrapper.state().parameterState).toEqual("age");
  });
});
