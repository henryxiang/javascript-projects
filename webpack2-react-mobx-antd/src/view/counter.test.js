import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import CounterView from './counter';
import Counter from '../model/counter';
import renderer from 'react-test-renderer';

describe('Counter View component', () => {

  it('renders Counter component', () => {
    const wrapper = shallow(
        <CounterView counter={new Counter()}/>
    );
    // console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  })
});
