import { validateDate } from '../'

it('should correctly return true or false', () => {
  const currMonth = new Date().getMonth()
  const currYear = new Date().getFullYear()
  expect(validateDate('1310')).toEqual(false)
  expect(validateDate('0610')).toEqual(false)
  expect(validateDate(`00${currYear.toString().slice(2)}`)).toEqual(false)
  expect(validateDate(`0${currMonth + 1}${currYear.toString().slice(2)}`)).toEqual(true)
})