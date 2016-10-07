import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as CardActions from 'actions/CardActions'

import HomeView from '../components/HomeView'

const mapActionCreators = (dispatch) => ({
  actions: bindActionCreators(CardActions, dispatch)  
})

const mapStateToProps = (state) => ({
  cards: state.cards  
})

export default connect(mapStateToProps, mapActionCreators)(HomeView)
