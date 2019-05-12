import React from 'react'
import './Input.scss'

const Input = ({ className, stage, label, value, regex, setFunc }) => {

  function handleChange(event) {
    if (event.target.value.match(regex)) {
      // setError('')
      setFunc(event.target.value)
    } else {
      // setError('Numerical/Alphabetic characters only')
    }
  }
  return (
    <div className={`input-container ${className === stage ? 'enabled' : 'disabled'}`}>
      <span>{label}</span>
      <input disabled={className === stage ? false : true } onChange={handleChange} value={value} />
    </div>
  )
}

export default Input