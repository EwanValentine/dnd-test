import React, { PropTypes } from 'react'

import "./Card.scss"
import { DragSource } from 'react-dnd'
import { ItemTypes } from 'Constants'

const cardSource = {

  beginDrag(props) {
    return {
      name: props.name,
      id: props.id,
      type: props.type,
    }
  },

  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    console.log(item)
    console.log(dropResult)

    if (dropResult.type === item.type) {
      
      props.actions.deleteCard(item.id)

      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`
      );
    }
  }
}

@DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export class Card extends React.Component {

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { isDragging, connectDragSource } = this.props
    const { name } = this.props

    const opacity = isDragging ? 0.3 : 1

    return connectDragSource(
      <div className="card" style={{ opacity }}>
        <p>{name}</p>
      </div>
    )
  }
}

export default Card
