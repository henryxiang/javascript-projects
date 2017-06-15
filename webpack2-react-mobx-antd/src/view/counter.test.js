import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render, mount } from 'enzyme';
import CounterView from './counter';
import Counter from '../model/counter';
import renderer from 'react-test-renderer';

describe('Counter View component', () => {

  const preventDefault = () => {}

  it('renders Counter component', () => {
    const wrapper = shallow(
        <CounterView counter={new Counter()}/>
    );
    // console.log(wrapper.find('root'));
    expect(wrapper).toMatchSnapshot();
  })

  it('should have initial 0 count', () => {
    const counter = new Counter()
    const wrapper = shallow(
        <CounterView counter={counter} />
    );
    expect(wrapper.find('Badge').html()).toMatch(/<span.+>0<\/span>/)    
  })

  it('should have count of 1 after one click', () => {
    const counter = new Counter()
    const wrapper = shallow(
        <CounterView counter={counter} />
    );
    expect(wrapper.find('Badge').html()).toMatch(/<span.+>0<\/span>/)
    wrapper.find('Badge').simulate('click', {preventDefault})
    wrapper.find('Badge').simulate('click', {preventDefault})
    expect(wrapper.find('Badge').html()).toMatch(/<span.+>2<\/span>/) 
  })

});
