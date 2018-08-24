import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from '../reducers'

const isDebuggingInChrome = !!window.navigator.userAgent

export default function (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunk,
      createLogger({
        predicate: () => isDebuggingInChrome,
        collapsed: true,
        duration: true,
      }),
    )),
  )
}