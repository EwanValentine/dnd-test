import React from 'react'
import './HomeView.scss'

import Card from './Card'

const cards = [
  { id: 1, title: 'This is a test card' },
  { id: 2, title: 'This is another card' },
]

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    {cards.map(card => <Card id={card.id} />)}
  </div>
)

export default HomeView
