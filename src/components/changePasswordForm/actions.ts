/**
 * Redux action class for Change Password Form.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import AuthenticationService from '../../domain/service/AuthenticationService'

export const changePassword = (email: string, currentPassword: string, newPassword: string) =>
  (dispatch: Dispatch<any>) => (async () => {
    dispatch({ type: ActionTypes.CHANGE_PASSWORD_REQUESTED })
    try {
      const response = await AuthenticationService.changePassword(email, currentPassword, newPassword)
      if (response.data.code === 'SUCCESS') {
        dispatch({ type: ActionTypes.CHANGE_PASSWORD_SUCCESS })
      } else {
        throw response.data.message
      }
    } catch (error) {
      dispatch({ type: ActionTypes.CHANGE_PASSWORD_FAILED, error: error })
    }
  })()