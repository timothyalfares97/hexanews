/**
 * Redux reducers for login state in the application.
 */

import { ActionTypes } from '../actions/ActionTypes'

const isLoggedIn = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.GET_LOGIN:
      return action.isLoggedIn
    case ActionTypes.LOGIN_USER_SUCCESS:
      return true
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

export type IsLoggedIn = boolean

export default isLoggedIn