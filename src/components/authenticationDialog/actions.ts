import { ActionTypes } from '../../actions/ActionTypes'
import { History } from 'history'
import { Dispatch } from 'redux'
import UserRepository from '../../domain/repository/UserRepository'

export const registerUser = (email: string, password: string, name: string, history: History) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.REGISTER_USER_REQUESTED })
  try {
    const response = await UserRepository.createUser(email, password, name)
    if (response.data.success) {
      dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS })
    }
  } catch (error) {
    dispatch({ type: ActionTypes.REGISTER_USER_FAILED })
  }
})()
