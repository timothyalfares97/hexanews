/**
 * Redux action class for account page.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'
import UserRepository from '../../domain/repository/UserRepository'
import AuthenticationService from '../../domain/service/AuthenticationService'

export const editUser = (edittedUser: User) => (dispatch: Dispatch<any>) => (async () => {
  const id = localStorage.getItem('id')
  if (id !== null) {
    dispatch({ type: ActionTypes.EDIT_USER_REQUESTED })
    try {
      const response = await UserRepository.edit(id, edittedUser)
      if (response.data) {
        dispatch({ type: ActionTypes.EDIT_USER_SUCCESS, user: response.data })
      }
    } catch (error) {
      dispatch({ type: ActionTypes.EDIT_USER_FAILED })
    }
  }
})()

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