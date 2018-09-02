/**
 * Redux action class for account page.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'
import UserRepository from '../../domain/repository/UserRepository'

export const editUser = (edittedUser: User) => (dispatch: Dispatch<any>) => (async () => {
  const id = localStorage.getItem('id')
  if (id !== null) {
    dispatch({ type: ActionTypes.EDIT_USER_REQUESTED })
    try {
      const response = await UserRepository.editUser(id, edittedUser)
      if (response.data) {
        dispatch({ type: ActionTypes.EDIT_USER_SUCCESS })
      }
    } catch (error) {
      dispatch({ type: ActionTypes.EDIT_USER_FAILED })
    }
  }
})()