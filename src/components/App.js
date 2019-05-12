import React, { useState } from 'react'
import './App.scss'
import { Card, Input } from './'

const App = () => {

  const [stage, setStage] = useState('card-number')
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [validThru, setValidThru] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [croak, setCroak] = useState(false)
  const [error, setError] = useState('')

  const handleButton = stage => {
    if (stage === 'card-number') {
      if (cardNumber.length === 16) setStage('cardholder-name')
      else setError ('')
    } else if (stage === 'cardholder-name') {
      if (cardholderName.length > 0) setStage('valid-thru')
      else setError('')
    } else if (stage === 'valid-thru') {
      if (validThru.length === 4) setStage('security-code')
      else setError('')
    } else if (stage === 'security-code') {
      if (securityCode.length === 3) {
        setTimeout(() => setSecurityCode(''), 200)
        setStage('card-number')
        setCardNumber('')
        setCardholderName('')
        setValidThru('')
      } else {
        setError('')
      }
    }
  }

  return (
    <div className='app'>
      <Card />
      <span className='headline'>Type in your card details:</span>
      <div className={`inputs-container ${stage}`}>
        <Input 
          stage={stage}
          className='card-number'
          label='Card Number'
          setFunc={setCardNumber}
          value={cardNumber}
          regex={/^[0-9]{0,16}$/}
        />
        <Input 
          stage={stage}
          className='cardholder-name'
          label='Cardholder Name'
          setFunc={setCardholderName}
          value={cardholderName}
          regex={/^[a-z,A-Z ]{0,21}$/}
        />
        <Input 
          stage={stage}
          className='valid-thru'
          label='Valid Thru'
          setFunc={setValidThru}
          value={validThru}
          regex={/^[0-9]{0,4}$/}
        />
        <Input 
          stage={stage}
          className='security-code'
          label='Security Code (CVV)'
          setFunc={setSecurityCode}
          value={securityCode}
          regex={/^[0-9]{0,3}$/}
        />
      </div>
      <button className={croak ? 'croak' : ''} 
      onClick={() => { 
        setCroak(true) 
        handleButton(stage)
      }} 
      onAnimationEnd={() => setCroak(false)}
      type='button'>
        {stage === 'security-code' ? 'Done' : 'Next'}
      </button> 
    </div>
  )
}

export default App