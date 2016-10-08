import HomeView from './components/HomeView'
import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Container = require('./containers/HomeContainer').default
      cb(null, Container)
    }, 'home')
  }
})
