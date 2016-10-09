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
    const { actions, columnActions } = this.props
    actions.getCards()
    columnActions.getColumns()
  }

  componentWillReceiveProps(nextProps) {
    const { cards, columns } = this.props
    if (nextProps.cards.length !== cards.length) {
      this.forceUpdate()
    }

    if (nextProps.columns.length !== columns.length) {
      this.forceUpdate()
    }
  }

  render() {
    const { actions, cards, columns } = this.props
    return (
      <div className="home-container">
        <button>Add Column</button>
        <div className="dropzone-container">
          {columns.map((col, i) => 
            <DoneZone key={i} 
                      {...col}
                      cards={cards} 
                      actions={actions} />    
          )}
        </div>
        {cards.filter(card => card.status === null)
               .map(card => 
          <Card {...card} actions={actions} />
        )}
      </div>
    )
  }
}
