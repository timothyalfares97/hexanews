/**
 * Redux reducer for the header.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

const isLoadingRegister = (state: boolean = false, action: any) => {
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

const isLoadingLogin = (state: boolean = false, action: any) => {
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

export type HeaderContainer = {
  isLoadingRegister: boolean,
  isLoadingLogin: boolean,
}

export default combineReducers<HeaderContainer>({
  isLoadingRegister,
  isLoadingLogin,
})