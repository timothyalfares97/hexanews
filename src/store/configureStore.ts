/**
 * Redux configuration store.
 */
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'remote-redux-devtools'
import { History } from 'history'

import rootReducer from '../reducers'

const isDebuggingInChrome = !!window.navigator.userAgent

export default function (initialState = {}, history: History) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeWithDevTools(applyMiddleware(
      routerMiddleware(history),
      thunk,
      createLogger({
        predicate: () => isDebuggingInChrome,
        collapsed: true,
        duration: true,
      }),
    )),
  )
}