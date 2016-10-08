import fetch from 'isomorphic-fetch'

export const ADD_CARD = 'ADD_CARD'
export const ADDED_CARD = 'ADDED_CARD'

export const REMOVE_CARD = 'REMOVE_CARD'
export const REMOVED_CARD = 'REMOVED_CARD'

export const GET_CARDS = 'GET_CARDS'
export const GOT_CARDS = 'GOT_CARDS'

export const MOVE_CARD = 'MOVE_CARD'
export const MOVED_CARD = 'MOVED_CARD'

/**
 * addCard
 *
 * @param {Object} card
 */
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

export const getCards = () => {
  return dispatch => {
    return dispatch(gotCards())
  }
}

const gotCards = () => {
  return {
    type: GOT_CARDS,
  }
}

/**
 * removedCard
 *
 * @param {Object} card
 */
export const removeCard = (card) => {
  return dispatch => {
    return dispatch(removedCard(card))
  }
}

/**
 * removedCard
 * 
 * @param  {Object} card
 * @return {Object}
 */
const removedCard = (card) => {
  return {
    type: REMOVED_CARD,
    payload: card,
  }
}

/**
 * moveCard
 *
 * @param {String} id
 * @param {String} status
 */
export const moveCard = (id, status) => {
  return dispatch => {
    return dispatch(movedCard(id, status))
  }
}

/**
 * movedCard
 *
 * @param {String} id
 * @param {String} status
 */
const movedCard = (id, status) => {
  const movedCardPayload = {
    id,
    status,
  }
  return {
    type: MOVED_CARD,
    payload: movedCardPayload,
  }
}
