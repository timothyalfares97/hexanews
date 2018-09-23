/**
 * Redux action class for header components.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * Logout action that will change the state to logout and remove token and id
 */
export const logout = () => (dispatch: Dispatch<any>) => (() => {
  localStorage.removeItem('token')
  localStorage.removeItem('id')
  dispatch({ type: ActionTypes.LOGOUT })
})()