/**
 * Redux reducers for changePasswordForm container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * changePasswordError state that will be changed based on actions in the application
 * @param state a collection of the current state of changePasswordError
 * @param action The trigger to mutate the changePasswordError in the Redux
 * @return payload containing the changePasswordError
 */
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

/**
 * isChangingPassword state that will be changed based on actions in the application
 * @param state a collection of the current state of isChangingPassword
 * @param action The trigger to mutate the isChangingPassword in the Redux
 * @return payload containing the isChangingPassword
 */
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

export interface ChangePasswordFormContainer {
  changePasswordError: string
  isChangingPassword: boolean
}

export default combineReducers<ChangePasswordFormContainer>({
  changePasswordError,
  isChangingPassword
})