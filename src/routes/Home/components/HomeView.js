import React from 'react'
import './HomeView.scss'

import Card from 'components/cards/Card'
import DoneZone from './DropZone'
import { ItemTypes } from 'Constants'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

@DragDropContext(HTML5Backend)
export default class HomeView extends React.Component {

  constructor(props) {
    super(props) 
  }

  componentWillMount() {
    const { actions } = this.props
    actions.getCards()
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = this.props
    if (nextProps.cards.length !== cards.length) {
      this.forceUpdate()
    }
  }

  render() {
    const { actions, cards } = this.props
    return (
      <div className="home-container">
        <h4>Welcome!</h4>
        <div className="dropzone-container">
          <DoneZone status="todo" cards={cards} actions={actions} />
          <DoneZone status="doing" cards={cards} actions={actions} />
          <DoneZone status="done" cards={cards} actions={actions} />
        </div>
        {cards.filter(card => card.status === null)
               .map(card => 
          <Card {...card} actions={actions} />
        )}
      </div>
    )
  }
}
