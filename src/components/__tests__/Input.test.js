import React from 'react'
import { Input } from '../'
import { shallow } from 'enzyme'

let props

beforeEach(() => {
  props = {
    stage: 'card-number',
    className: 'card-number',
    label: 'Card Number',
    setFunc: jest.fn(),
    value: '',
    regex: new RegExp(`^[0-9]{0,21}$`),
    error: '',
    setError: jest.fn()
  }
})


it('should be enabled when prop stage matches prop className', () => {
  const wrapper = shallow(<Input {...props} />)
  expect(wrapper.find('div')).toHaveClassName('enabled')
  expect(wrapper.find('input')).not.toBeDisabled()
})

it('should be disabled when prop stage doesnt match prop className', () => {
  props.stage = 'security-code'
  const wrapper = shallow(<Input {...props }/>)
  expect(wrapper.find('div')).toHaveClassName('disabled')
  expect(wrapper.find('input')).toBeDisabled()
})