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

  /**
   * endDrag
   *
   * @param {Object} props
   * @param {Object} monitor
   */
  endDrag(props, monitor) {
    const item = monitor.getItem()
    const dropResult = monitor.getDropResult()

    // If dropzone
    if (dropResult && dropResult.type === "remove") {
      props.actions.removeCard(item.id)
      return
    } else if (dropResult && dropResult.status) {
      props.actions.moveCard(item.id, dropResult.status)
      return
    }

    window.alert("Update failed!")
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

  /**
   * constructor
   *
   * @param {Object} props
   */
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
