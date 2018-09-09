/**
 * Redux action class for change password form.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import AuthenticationService from '../../domain/service/AuthenticationService'

export const changePassword = (email: string, currentPassword: string, newPassword: string) =>
  (dispatch: Dispatch<any>) => (async () => {
    dispatch({ type: ActionTypes.CHANGE_PASSWORD_REQUESTED })
    try {
      await AuthenticationService.changePassword(email, currentPassword, newPassword)
      dispatch({ type: ActionTypes.CHANGE_PASSWORD_SUCCESS })
    } catch (error) {
      dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED })
    }
  })()