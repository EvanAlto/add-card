import React from 'react'
import './Card.scss'
import { FaReact } from 'react-icons/fa'

const Card = ({ stage, cardNumber, cardholderName, validThru, securityCode }) => {
  const displayCardNum = cardNumber.value + 'XXXXXXXXXXXXXXXX'.slice(cardNumber.value.length)
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
          <div className={`card-number ${stage === 'card-number' ? 'current' : 'not'}`}>
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
          <div>
            <div>
              <span>CARDHOLDER NAME</span>
              <span>Evan Alto</span>
            </div>
            <div>
              <span>VALID THRU</span>
              <span>05/19</span>
            </div>
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