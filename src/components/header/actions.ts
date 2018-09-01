/**
 * Redux action class for header components.
 */

import { Dispatch } from 'redux'
import { History } from 'history'

import { ActionTypes } from '../../actions/ActionTypes'

export const logout = (history: History) => (dispatch: Dispatch<any>) => (() => {
  localStorage.removeItem('token')
  dispatch({ type: ActionTypes.LOGOUT })
})()