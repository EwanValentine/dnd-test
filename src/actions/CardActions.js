import fetch from 'isomorphic-fetch'

export const ADD_CARD = 'ADD_CARD'
export const ADDED_CARD = 'ADDED_CARD'

export const REMOVE_CARD = 'REMOVE_CARD'
export const REMOVED_CARD = 'REMOVED_CARD'

export const addCard = (card) => {
  return dispatch => {
    // Make API calls here
    dispatch(addedCard(card))  
  }    
}

const addedCard = (card) => {
  return {
    type: ADDED_CARD,
    payload: card,
  } 
}

export const removeCard = (card) => {
  return dispatch => {
    dispatch(removeCard(card))
  }
}

const removedCard = (card) => {
  return {
    type: REMOVED_CARD,
    payload: card,
  }
}
