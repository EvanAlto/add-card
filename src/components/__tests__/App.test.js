import React from 'react'
import App from '../App'
import { Card, Input, Button } from '../'
import { shallow } from 'enzyme'

it('renders components accordingly', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(Card).length).toEqual(1)
  expect(wrapper.find(Input).length).toEqual(4)
  expect(wrapper.find(Button).length).toEqual(1)
})
