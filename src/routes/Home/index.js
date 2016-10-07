import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
    path: 'channels',
      /*  Async getComponent is only invoked when route matches   */
        getComponent (nextState, cb) {
              /*  Webpack - use 'require.ensure' to create a split point
               *          and embed an async module loader (jsonp) when bundling   */
                  require.ensure([], (require) => {
                          /*  Webpack - use require callback to define
                           *            dependencies for bundling   */
                                const Container = require('./containers/ChannelSelectContainer').default

                                      cb(null, Container)

                                          }, 'channelSelect')
                    }
})
