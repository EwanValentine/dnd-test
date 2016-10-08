import * as types from 'actions/ColumnActions'

const defaultState = [
  { id: 1, status: 'todo', name: 'Todo' },
  { id: 2, status: 'doing', name: 'Doing' },
  { id: 3, status: 'done', name: 'Done' },
]

export const columns = (state = defaultState, action) => {
  
  switch (action.type) {
    
    case types.ADDED_COLUMN:
      return [...state, action.payload]
      break

    case types.GOT_COLUMNS:
      return defaultState
      break

    case types.REMOVE_COLUMN:
      return state.filter(col => 
        col.id !== action.payload
      )
      break

    default: 
      return state
      break
  }
}
