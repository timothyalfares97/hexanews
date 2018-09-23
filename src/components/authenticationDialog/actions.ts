/**
 * Redux action class for authentication dialog.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import UserRepository from '../../domain/repository/UserRepository'
import AuthenticationService from '../../domain/service/AuthenticationService'

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
    switch (response.data.code) {
      case 'SUCCESS':
        dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS })
        break
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.REGISTER_USER_FAILED, error: error })
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
    switch (response.data.code) {
      case 'SUCCESS':
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.id)
        const user = await UserRepository.get(response.data.id)
        dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: user.data.message})
        break
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.LOGIN_USER_FAILED, error: error })
  }
})()