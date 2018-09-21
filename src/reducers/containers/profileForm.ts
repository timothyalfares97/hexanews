/**
 * Redux reducer for profileForm.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const editUserError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.EDIT_USER_FAILED:
      return action.error
    case ActionTypes.EDIT_USER_REQUESTED:
    case ActionTypes.EDIT_USER_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

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

export interface ProfileFormContainer {
  editUserError: string
  isEditingUser: boolean
}

export default combineReducers<ProfileFormContainer>({
  editUserError,
  isEditingUser
})