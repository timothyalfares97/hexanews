/**
 * Redux action class for authentication dialog.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import UserRepository from '../../domain/repository/UserRepository'

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
