import React, { PropTypes } from 'react'
import { ItemTypes } from 'Constants'
import { DropTarget } from 'react-dnd'
import Card from 'components/Cards/Card'

import "./DropZone.scss"

const cardTarget = {
  drop(props) {

    // Return the data required to the drop target.
    return { status: props.status }  
  }  
}

@DropTarget(ItemTypes.CARD, cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class DropZone extends React.Component {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    cards: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)    
  }
  
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const { cards, status, actions } = this.props
    const isActive = canDrop && isOver
    return connectDropTarget(
      <div className="drop-zone">
        <h2>{this.props.status}</h2>
        {isActive ? <p>Drop here...</p> : false}

        <div className="drop-zone__cards">
          {cards.filter(card =>
              card.status === status
            ).map((card, i) => 
              <Card index={i} {...card} actions={actions} />
          )}
        </div>

      </div>
    )
  }
}
