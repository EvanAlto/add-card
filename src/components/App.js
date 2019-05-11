import React, { useState } from 'react'
import './App.scss'
import { Card, Input, Button } from './'

const App = () => {

  const [stage, setStage] = useState('card-number')
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [validThru, setValidThru] = useState('')
  const [securityCode, setSecurityCode] = useState('')

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
          regex={/^[a-z,A-Z]{0, 21}$/}
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
      <Button />
    </div>
  )
}

export default App

//extract each input into a component, but each one needs to have a different onChange
// handler with validation and calling of own hook

// - card will be passed state from app, OR potential create a custom hook to use it..
// however passing it down seems like the more sensical thing to do

// - inputs-container will house multiple inputs for each part of card

// - button will say Next or Done depending on state of app
// and on done reset input state values, but that hooks should only be used top level..
// so in an effect checking state? should you call hooks inside other hooks? that isn't
// top level.. so custom hook then? clearly this needs more investigating cause
// how else would you make certain updates and not others without using hooks
// within conditionals. ONLY OTHER VALID PLACE TO CALL HOOKS IS IN CUSTOM HOOKS

// two rules. Top Level Only, and only call hooks from react function components
