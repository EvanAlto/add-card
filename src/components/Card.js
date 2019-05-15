import React from 'react'
import './Card.scss'
import { FaReact } from 'react-icons/fa'

const Card = ({ stage, cardNumber, cardholderName, validThru, securityCode }) => {
  const displayCardNum = cardNumber.value + 'XXXXXXXXXXXXXXXX'.slice(cardNumber.value.length)
  const displayValidThru = validThru.value.slice(0,2) + 'MM'.slice(validThru.value.length) 
    + '/' + validThru.value.slice(2) + 'YY'.slice(validThru.value.slice(2).length)
  const cardNumArr = [ 
    displayCardNum.slice(0, 4).split(''), 
    displayCardNum.slice(4, 8).split(''),
    displayCardNum.slice(8, 12).split(''),
    displayCardNum.slice(12, 16).split('')
  ]
  
  return (
    <div className='card-container'>
      <div className={`card ${stage === 'security-code' ? 'flipped' : ''}`}>
        <div className='face front'>
          <FaReact />
          <div className={`card-number ${stage === 'card-number' ? 'active' : 'inactive'}`}>
          {cardNumArr.map((group,i) => {
            return ( 
            <span className={`group group-${i}`} key={i}>
              {group.map((num, j) => {
                if (num !== 'X') return <span key={`${i + j}`} className="num">{num}</span>
                else return <span key={i + j}>{num}</span>
              })}
            </span>)
            })}
          </div>
          <div className="detail cardholder-name">
            <span>CARDHOLDER NAME</span>
            <span className={ `${stage === 'cardholder-name' ? 'active' : 'inactive'}
              ${cardholderName.value ? 'text' : ''}`
            }>
              {cardholderName.value ? cardholderName.value : 'name surname'}
            </span>
          </div>
          <div className="detail valid-thru">
            <span>VALID THRU</span>
            <span className={stage === 'valid-thru' ? 'active' : 'inactive'}>
              {displayValidThru.split('').map((char, i) => {
                if (validThru.value.includes(char) || (char === '/' && validThru.value.length >= 2)) {
                  return <span key={i} className="text">{char}</span>
                } else {
                  return <span key={i}>{char}</span>
                }
              })}
            </span>
          </div>
        </div>
        <div className='face back'>
          <div>682</div>
          <FaReact />          
        </div>
      </div>
    </div>
  )
}

export default Card