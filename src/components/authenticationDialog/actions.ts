/**
 * Redux action class for authentication dialog.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import AuthenticationService from '../../domain/service/AuthenticationService'
import UserRepository from '../../domain/repository/UserRepository'

/**
 * Register user action that connecting to server and manage the state data from it
 * @param email the email of the current user
 * @param password the current password of the user
 * @param name the name of the user
 */
export const registerUser = (email: string, password: string, name: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.REGISTER_USER_REQUESTED })
  try {
    const response = await UserRepository.create(email, password, name)
    const successAction = () => dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.REGISTER_USER_FAILED, error: mappedError })
  }
})()

/**
 * Login user action that connecting to server and manage the state data from it
 * @param email the email of the current user
 * @param password the current password of the user
 */
export const loginUser = (email: string, password: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.LOGIN_USER_REQUESTED })
  try {
    const response = await AuthenticationService.login(email, password)
    const successAction = async () => {
      await localStorage.removeItem('token')
      await localStorage.removeItem('id')
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('id', response.data.id)
      const user = await UserRepository.get(response.data.id)
      dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: user.data.message})
    }
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.LOGIN_USER_FAILED, error: mappedError })
  }
})()

/**
 * Reset password action that connecting to server and manage the state data from it
 * @param email the email that want to reset the password
 */
export const resetPassword = (email: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.RESET_PASSWORD_REQUESTED })
  try {
    const response = await AuthenticationService.resetPassword(email)
    const successAction = () => dispatch({ type: ActionTypes.RESET_PASSWORD_SUCCESS })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.RESET_PASSWORD_FAILED, error: mappedError })
  }
})()