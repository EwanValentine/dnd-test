import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CardActions from 'actions/CardActions'
import * as ColumnActions from 'actions/ColumnActions'

import HomeView from '../components/HomeView'

const mapActionCreators = (dispatch) => ({
  actions: bindActionCreators(CardActions, dispatch),
  columnActions: bindActionCreators(ColumnActions, dispatch)
})

const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns,
})

export default connect(mapStateToProps, mapActionCreators)(HomeView)
