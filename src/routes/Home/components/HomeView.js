import React from 'react'
import './HomeView.scss'

import Card from './Card'
import DoneZone from './DropZone'
import { ItemTypes } from 'Constants'

const cards = [
  { id: 1, title: 'This is a test card' },
  { id: 2, title: 'This is another card' },
]

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <DoneZone />
    {cards.map(card => 
      <Card id={card.id} title={card.title}/>
    )}
  </div>
)

export default HomeView
