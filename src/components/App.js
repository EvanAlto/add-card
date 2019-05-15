import React, { useState } from 'react'
import './App.scss'
import { Card, Input } from './'

const App = () => {

  const [stage, setStage] = useState('card-number')
  const [cardNumber, setCardNumber] = useState({ value:'', max: 16})
  const [cardholderName, setCardholderName] = useState({ value: '', max: 21})
  const [validThru, setValidThru] = useState({ value: '', max: 4})
  const [securityCode, setSecurityCode] = useState({ value: '', max: 3})
  const [croak, setCroak] = useState(false)
  const [error, setError] = useState('')

  const handleButton = stage => {
    if (stage === 'card-number') {
      if (cardNumber.value.length === cardNumber.max) setStage('cardholder-name')
      else setError ('Must be a valid card number')
    } else if (stage === 'cardholder-name') {
      if (cardholderName.value.length > 0) setStage('valid-thru')
      else setError('Must be a valid name')
    } else if (stage === 'valid-thru') {
      if (validThru.value.length === validThru.max) setStage('security-code')
      else setError('Must be a valid month/year')
    } else if (stage === 'security-code') {
      if (securityCode.value.length === securityCode.max) {
        setTimeout(() => setSecurityCode({ ...securityCode, value: '' }), 200)
        setStage('card-number')
        setCardNumber({...cardNumber, value: ''})
        setCardholderName({ ...cardholderName, value: '' })
        setValidThru({ ...validThru, value: '' })
      } else {
        setError('Must be a valid security code')
      }
    }
    setTimeout(() => document.querySelector('div.enabled input').focus(),200)
  }

  const handleKey = event => {
    if (event.key === 'Enter') {
      setCroak(true)
      handleButton(stage)
    }
  }
  return (
    <div className='app' onKeyDown={handleKey}>
      <Card stage={stage} 
        cardNumber={cardNumber} 
        cardholderName={cardholderName}
        validThru={validThru}
        securityCode={securityCode}
      />
      <span className='headline'>Type in your card details:</span>
      <div className={`inputs-container ${stage}`}>
        <Input 
          stage={stage}
          className='card-number'
          label='Card Number'
          setFunc={setCardNumber}
          value={cardNumber}
          regex={new RegExp(`^[0-9]{0,${cardNumber.max}}$`)}
          error={error}
          setError={setError}
        />
        <Input 
          stage={stage}
          className='cardholder-name'
          label='Cardholder Name'
          setFunc={setCardholderName}
          value={cardholderName}
          regex={new RegExp(`^[a-z,A-Z ]{0,${cardholderName.max}}$`)}
          error={error}
          setError={setError}
        />
        <Input 
          stage={stage}
          className='valid-thru'
          label='Valid Thru'
          setFunc={setValidThru}
          value={validThru}
          regex={new RegExp(`^[0-9]{0,${validThru.max}}$`)}
          error={error}
          setError={setError}
        />
        <Input 
          stage={stage}
          className='security-code'
          label='Security Code (CVV)'
          setFunc={setSecurityCode}
          value={securityCode}
          regex={new RegExp(`^[0-9]{0,${securityCode.max}}$`)}
          error={error}
          setError={setError}
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