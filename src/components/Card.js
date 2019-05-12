import React from 'react'
import './Card.scss'
import { FaDragon } from 'react-icons/fa'

const Card = ({ stage }) => {
  return (
    <div className='card-container'>
      <div className={`card ${stage === 'security-code' ? 'flipped' : ''}`}>
        <div className='face front'>
          <FaDragon />
          <div>
            {/* <div>0000 0000 0000 0000</div>
            <div>
              <div>
                <span>CARDHOLDER NAME</span>
                <span>Evan Alto</span>
              </div>
              <div>
                <span>VALID THRU</span>
                <span>05/19</span>
              </div>
            </div> */}
          </div>
        </div>
        <div className='face back'>
          {/* <div>682</div> */}
          <FaDragon />          
        </div>
      </div>
    </div>
  )
}

export default Card