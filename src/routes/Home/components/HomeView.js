import React from 'react'
import './HomeView.scss'

import Card from './Card'
import DoneZone from './DropZone'
import { ItemTypes } from 'Constants'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const cards = [
  { id: 1, name: 'image-one', type: 'image' },
  { id: 2, name: 'colour-two', type: 'colour' },
]

@DragDropContext(HTML5Backend)
export default class HomeView extends React.Component {

  constructor(props) {
    super(props) 
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)  
  }

  render() {
    const { actions } = this.props
    return (
      <div>
        <h4>Welcome!</h4>
        <DoneZone />
        {cards.map(card => 
          <Card id={card.id} name={card.name} type={card.type} actions={actions} />
        )}
      </div>
    )
  }
}
