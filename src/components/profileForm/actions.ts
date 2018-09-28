/**
 * Redux action class for Profile Form.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import { User } from '../../domain/model/User'
import UserRepository from '../../domain/repository/UserRepository'

/**
 * Edit user action that connecting to server and manage the state data from it
 * @param edittedUser the user that wants to be editted
 */
export const editUser = (edittedUser: User) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_USER_REQUESTED })
  try {
    const response = await UserRepository.edit(edittedUser)
    const successAction = () => dispatch({ type: ActionTypes.EDIT_USER_SUCCESS, user: response.data.message })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.EDIT_USER_FAILED, error: mappedError })
  }
})()