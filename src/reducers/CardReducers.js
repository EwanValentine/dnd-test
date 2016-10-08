import * as types from 'actions/CardActions'

const defaultState = [
  { id: 1, name: 'image-one', type: 'image', status: null },
  { id: 2, name: 'colour-two', type: 'colour', status: null },
]

export const cards = (state = defaultState, action) => {
  
  switch (action.type) {
    
    case types.ADDED_CARD:
      return [...state, action.payload]
      break

    case types.GOT_CARDS:
      return defaultState
      break

    case types.REMOVED_CARD:
      return state.filter(card => 
        card.id !== action.payload
      ) 
      break 

    case types.MOVED_CARD:

      // Find card, update status
      const newCard = state.find(card => 
        card.id === action.payload.id
      )

      newCard.status = action.payload.status

      // Remove old card
      const filteredList = state.filter(card => 
        card.id !== action.payload.id    
      )

      // Return new copy of cards
      return [...filteredList, newCard]

    default:
      return state
      break
  }
}
