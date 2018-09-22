/**
 * Redux reducers for authenticationDialog container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * isLoadingRegister state that will be changed based on actions in the application
 * @param state a collection of the current state of isLoadingRegister
 * @param action The trigger to mutate the isLoadingRegister in the Redux
 * @return payload containing the isLoadingRegister
 */
export const isLoadingRegister = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_REQUESTED:
      return true
    case ActionTypes.REGISTER_USER_SUCCESS:
    case ActionTypes.REGISTER_USER_FAILED:
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

/**
 * isLoadingLogin state that will be changed based on actions in the application
 * @param state a collection of the current state of isLoadingLogin
 * @param action The trigger to mutate the isLoadingLogin in the Redux
 * @return payload containing the isLoadingLogin
 */
export const isLoadingLogin = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_REQUESTED:
      return true
    case ActionTypes.LOGIN_USER_SUCCESS:
    case ActionTypes.LOGIN_USER_FAILED:
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

/**
 * loginError state that will be changed based on actions in the application
 * @param state a collection of the current state of loginError
 * @param action The trigger to mutate the loginError in the Redux
 * @return payload containing the loginError
 */
export const loginError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_FAILED:
      return action.error
    case ActionTypes.LOGIN_USER_REQUESTED:
    case ActionTypes.LOGIN_USER_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

/**
 * registerError state that will be changed based on actions in the application
 * @param state a collection of the current state of registerError
 * @param action The trigger to mutate the registerError in the Redux
 * @return payload containing the registerError
 */
export const registerError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_FAILED:
      return action.error
    case ActionTypes.REGISTER_USER_REQUESTED:
    case ActionTypes.REGISTER_USER_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

export interface AuthenticationDialogContainer {
  isLoadingRegister: boolean,
  isLoadingLogin: boolean,
  loginError: string,
  registerError: string,
}

export default combineReducers<AuthenticationDialogContainer>({
  isLoadingRegister,
  isLoadingLogin,
  loginError,
  registerError,
})