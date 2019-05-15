import React from 'react'
import { Card } from '../'
import { shallow } from 'enzyme'

let props
let wrapper

beforeEach(() => {
  props = {
    stage: 'card-number',
    cardNumber: {value:'', max: 16},
    cardholderName: {value:'', max: 21},
    validThru: {value:'', max: 4},
    securityCode: {value:'', max: 3}
  }
  wrapper = shallow(<Card {...props} />)
})

it('should activate div when stage matches', () => {
  expect(wrapper.find('div.card-number')).toHaveClassName('active')
})