import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import appReducer from './appReducer'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    appReducer,
  })

export default rootReducer
