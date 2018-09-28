/**
 * Redux action class for Change Password Form.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import AuthenticationService from '../../domain/service/AuthenticationService'

/**
 * Change password action that connecting to server and manage the state data from it
 * @param email the email of the current user
 * @param currentPassword the current password of the user
 * @param newPassword the new password of the user
 */
export const changePassword = (email: string, currentPassword: string, newPassword: string) =>
  (dispatch: Dispatch<any>) => (async () => {
    dispatch({ type: ActionTypes.CHANGE_PASSWORD_REQUESTED })
    try {
      const response = await AuthenticationService.changePassword(email, currentPassword, newPassword)
      const successAction = () => dispatch({ type: ActionTypes.CHANGE_PASSWORD_SUCCESS })
      handleResponseMessage(response, successAction)
    } catch (error) {
      const mappedError = mapErrorMessage(error)
      dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: mappedError })
    }
  })()