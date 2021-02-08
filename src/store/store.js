import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'

export const getStore = history => {
  const composeEnhancers = composeWithDevTools({})
  const routerMiddleware = createRouterMiddleware(history)

  return createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware))
  )
}
