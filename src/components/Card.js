import React from 'react'
import './Card.scss'
import { FaDragon } from 'react-icons/fa'

const Card = ({ stage, cardNumber, cardholderName, validThru, securityCode }) => {
  let displayedCardNumber = cardNumber.value + 'XXXXXXXXXXXXXXXX'.slice(cardNumber.value.length)
  let cardNumArr = []
  cardNumArr.push(displayedCardNumber.slice(0, 4).split(''))
  cardNumArr.push(displayedCardNumber.slice(4, 8).split(''))
  cardNumArr.push(displayedCardNumber.slice(8, 12).split(''))
  cardNumArr.push(displayedCardNumber.slice(12, 16).split(''))
  return (
    <div className='card-container'>
      <div className={`card ${stage === 'security-code' ? 'flipped' : ''}`}>
        <div className='face front'>
          <FaDragon />
          <div className="card-number">
          {cardNumArr.map((group,i) => {
            return ( 
            <span className={`group group-${i}`}key={i}>
              {group.map(num => {
                if (num !== 'X') return <span className="num">{num}</span>
                else return <span>{num}</span>
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
          <FaDragon />          
        </div>
      </div>
    </div>
  )
}

export default Card