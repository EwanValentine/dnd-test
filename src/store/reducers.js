import { combineReducers } from 'redux'
import locationReducer from './location'
import { cards } from 'reducers/CardReducers'
import { columns } from 'reducers/ColumnReducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    cards,
    columns,
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
