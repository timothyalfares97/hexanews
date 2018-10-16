/**
 * Redux reducers for login state in the application.
 */

import { ActionTypes } from '../actions/ActionTypes'

/**
 * isLoggedIn state that will be changed based on actions in the application
 * @param state a collection of the current state of isLoggedIn
 * @param action The trigger to mutate the isLoggedIn in the Redux
 * @return payload containing the isLoggedIn
 */
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