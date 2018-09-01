/**
 * Redux action class for account page.
 */
import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import UserRepository from '../../domain/repository/UserRepository'

export const changeName = (newName: string) => (dispatch: Dispatch<any>) => (async () => {
  const id = localStorage.getItem('id')
  if (id !== null) {
    dispatch({ type: ActionTypes.CHANGE_NAME_REQUESTED })
    try {
      const response = await UserRepository.changeName(id, newName)
      if (response.data) {
        dispatch({ type: ActionTypes.CHANGE_NAME_SUCCESS })
      }
    } catch (error) {
      dispatch({ type: ActionTypes.CHANGE_NAME_FAILED })
    }
  }
})()
