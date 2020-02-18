import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from '../App';
import Radio from './Radio';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('RadioComponent', () => {

  it('check if radio state changes by name', () => {
    const app = mount(<App />);
    const radio = app.find(Radio).get(0);
    radio.props.sortBy("name");
    expect(app.state().parameterState).toEqual("name");
  });

  it('check if radio state changes by age', () => {
    const app = mount(<App />);
    const radio = app.find(Radio).get(0);
    radio.props.sortBy("age");
    expect(app.state().parameterState).toEqual("age");
  });
});
