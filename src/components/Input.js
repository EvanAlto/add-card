import React from 'react'
import './Input.scss'

const Input = ({ className, stage, label, value, regex, setFunc, error, setError }) => {

  function handleChange(event) {
    if (event.target.value.match(regex)) {
      if (error) setError('')
      setFunc({ ...value, value: event.target.value})
    } else if (value.value.length !== value.max) {
      setError('Valid characters only')
    }
  }
  return (
    <div className={`input-container ${className === stage ? 'enabled' : 'disabled'} ${error ? 'error' : ''}`}>
        <span>{label}</span>
        {error && <span className="error">{error}</span>}
      <input disabled={className === stage ? false : true } onChange={handleChange} value={value.value} />
    </div>
  )
}

export default Input