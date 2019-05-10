import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

it('renders', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('div').length).toEqual(1)
})
