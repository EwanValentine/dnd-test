import React, { PropTypes } from 'react'
import { ItemTypes } from 'Constants'
import { DropTarget } from 'react-dnd'

import "./DropZone.scss"

const cardTarget = {
  drop() {

    // Return the data required to the drop target.
    return { id: 1, name: 'image-one', type: 'image' }  
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
  }

  constructor(props) {
    super(props)    
  }
  
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props
    const isActive = canDrop && isOver
    return connectDropTarget(
      <div className="drop-zone">
        {isActive ? <p>Drop here...</p> : false}
      </div>
    )
  }
}
