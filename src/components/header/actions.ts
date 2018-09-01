/**
 * Redux action class for header components.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const logout = () => (dispatch: Dispatch<any>) => (() => {
  localStorage.removeItem('token')
  dispatch({ type: ActionTypes.LOGOUT })
})()