/**
 * Redux reducers for profileForm container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * editUserError state that will be changed based on actions in the application
 * @param state a collection of the current state of editUserError
 * @param action The trigger to mutate the editUserError in the Redux
 * @return payload containing the editUserError
 */
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

/**
 * isEditingUser state that will be changed based on actions in the application
 * @param state a collection of the current state of isEditingUser
 * @param action The trigger to mutate the isEditingUser in the Redux
 * @return payload containing the isEditingUser
 */
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