/**
 * Redux action class for authentication dialog.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import UserRepository from '../../domain/repository/UserRepository'
import AuthenticationService from '../../domain/service/AuthenticationService'

export const registerUser = (email: string, password: string, name: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.REGISTER_USER_REQUESTED })
  try {
    const response = await UserRepository.createUser(email, password, name)
    if (response.data) {
      dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS })
    }
  } catch (error) {
    dispatch({ type: ActionTypes.REGISTER_USER_FAILED })
  }
})()

export const loginUser = (email: string, password: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.LOGIN_USER_REQUESTED })
  try {
    const response = await AuthenticationService.login(email, password)
    if (!!response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('id', response.data.id)
      const user = await UserRepository.getUser(response.data.id)
      dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, user: user.data })
    }
  } catch (error) {
    dispatch({ type: ActionTypes.LOGIN_USER_FAILED })
  }
})()