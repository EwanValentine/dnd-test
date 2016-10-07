import * as types from 'actions/CardActions'

export const cards = (state = [], action) => {
  
  switch (action.type) {
    
    case types.ADDED_CARD:
      return [...state, action.payload]
      break

    case types.REMOVED_CARD:
      return state.filter(card => card.id === action.payload.id)
      return 

    default:
      return state
      break
  }
}
