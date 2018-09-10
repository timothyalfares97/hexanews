/**
 * Redux reducer for account.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const isEditingUser = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.EDIT_USER_REQUESTED:
      return true
    case ActionTypes.EDIT_USER_SUCCESS:
    case ActionTypes.EDIT_USER_FAILED:
      return false
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

export type AccountContainer = {
  isEditingUser: boolean,
  isChangingPassword: boolean
}

export default combineReducers<AccountContainer>({
  isEditingUser,
  isChangingPassword
})