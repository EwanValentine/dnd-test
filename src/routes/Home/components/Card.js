import React from 'react'

import "./Card.scss"

export const Card = (props) => (
  <div className="card">
    <p>{props.title}</p>
  </div>
)

export default Card
