import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="face front"></div>
        <div className="face back"></div>
      </div>
    </div>
  )
}

export default Card