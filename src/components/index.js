export { default as Card } from './Card'
export { default as Input } from './Input'

export const validateDate = date => {
  const currMonth = new Date().getMonth()
  const currYear = new Date().getFullYear()
  const month = parseInt(date.slice(0,2))
  const year = parseInt(date.slice(2)) + 2000

  if (year < currYear || month > 12 || month === 0 || (year === currYear && month < currMonth + 1)) {
    return false
  }
  return true
}