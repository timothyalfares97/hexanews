/**
 * Redux action class for Profile Form.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { RESPONSE_CODE } from '../../constants/config'
import { User } from '../../domain/model/User'
import UserRepository from '../../domain/repository/UserRepository'
import { mapErrorMessage } from '../../actions/mapErrorMessage'

/**
 * Edit user action that connecting to server and manage the state data from it
 * @param edittedUser the user that wants to be editted
 */
export const editUser = (edittedUser: User) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_USER_REQUESTED })
  try {
    const response = await UserRepository.edit(edittedUser)
    switch (response.data.code) {
      case RESPONSE_CODE.success:
        dispatch({ type: ActionTypes.EDIT_USER_SUCCESS, user: response.data.message })
        break
      case RESPONSE_CODE.jwtError:
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.EDIT_USER_FAILED, error: mappedError })
  }
})()