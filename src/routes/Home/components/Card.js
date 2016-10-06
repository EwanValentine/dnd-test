import React, { PropTypes } from 'react'

import "./Card.scss"
import { DragSource } from 'react-dnd'

const cardSource = {

  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
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
export const Card = (props) => (
  <div className="card">
    <p>{props.title}</p>
  </div>
)

Card.propTypes = {
  connectDragStart: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Card
