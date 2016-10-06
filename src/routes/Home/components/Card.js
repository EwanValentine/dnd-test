import React, { PropTypes } from 'react'

import "./Card.scss"
import { DragSource } from 'react-dnd'
import { ItemTypes } from 'Constants'

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
export class Card extends React.Component {

  static propTypes = {
    connectDragStart: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card">
        <p>{props.title}</p>
      </div>
    )
  }
}

export default Card
