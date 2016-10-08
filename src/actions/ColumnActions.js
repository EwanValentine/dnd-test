export const GET_COLUMNS = 'GET_COLUMNS'
export const GOT_COLUMNS = 'GOT_COLUMNS'

export const ADD_COLUMN = 'ADD_COLUMN'
export const ADDED_COLUMN = 'ADDED_COLUMN'

export const REMOVE_COLUMN = 'REMOVE_COLUMN'
export const REMOVED_COLUMN = 'REMOVED_COLUMN'

export const getColumns = () => {
  return dispatch => {
    return dispatch(gotColumns())
  }
}

const gotColumns = () => {
  return {
    type: GOT_COLUMNS,
    payload: null,
  }
}

export const addColumn = (column) => {
  return dispatch => {
    return dispatch(addedColumn(column))
  }
}

const addedColumn = (column) => {
  return {
    type: ADDED_COLUMN,
    payload: column,
  }
}
