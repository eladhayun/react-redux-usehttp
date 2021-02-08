import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App/App'
import * as utils from './utils'
import rootReducer from './reducers'
import { routes } from './consts'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware,
} from 'connected-react-router'

const history = createBrowserHistory()
const composeEnhancers = composeWithDevTools({})
const routerMiddleware = createRouterMiddleware(history)

export const store = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(routerMiddleware))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={routes.ROOT} component={App} />
          <Route render={() => <Redirect to={routes.ROOT} />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
utils.reportWebVitals()
