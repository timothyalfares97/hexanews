/**
 * Redux reducer for the header.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

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