/**
 * Redux reducer for account.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const changePasswordError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PASSWORD_FAILED:
      return action.error
    case ActionTypes.CHANGE_PASSWORD_REQUESTED:
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

export const isChangingPassword = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PASSWORD_REQUESTED:
      return true
    case ActionTypes.CHANGE_PASSWORD_SUCCESS:
    case ActionTypes.CHANGE_PASSWORD_FAILED:
      return false
    default:
      return state
  }
}

export type ChangePasswordFormContainer = {
  changePasswordError: string,
  isChangingPassword: boolean
}

export default combineReducers<ChangePasswordFormContainer>({
  changePasswordError,
  isChangingPassword
})