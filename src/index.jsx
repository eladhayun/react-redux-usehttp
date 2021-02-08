import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { App } from './components'
import { getStore } from './store'
import * as utils from './utils'
import { routes } from './consts'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={getStore(history)}>
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
