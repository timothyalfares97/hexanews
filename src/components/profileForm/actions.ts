/**
 * Redux action class for Profile Form.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'
import UserRepository from '../../domain/repository/UserRepository'

export const editUser = (edittedUser: User) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_USER_REQUESTED })
  try {
    const response = await UserRepository.edit(edittedUser)
    switch (response.data.code) {
      case 'SUCCESS':
        dispatch({ type: ActionTypes.EDIT_USER_SUCCESS, user: response.data.message })
        break
      case 'JWTERROR':
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.EDIT_USER_FAILED, error: error })
  }
})()