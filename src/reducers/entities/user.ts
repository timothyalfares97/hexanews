/**
 * Redux reducers for current user state in the application.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'

const initialUser = {
  _id: '',
  email: '',
  name: '',
  description: '',
  createdAt: '',
}

/**
 * User state that will be changed based on actions in the application
 * @param state the current user state in the application
 * @param action The trigger to mutate the current user in the Redux
 * @return payload containing the user
 */
const user = (state: User = initialUser, action: any = {}) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
    case ActionTypes.LOGIN_USER_SUCCESS:
    case ActionTypes.EDIT_USER_SUCCESS:
      return action.user
    case ActionTypes.LOGOUT:
      return initialUser
    default:
      return state
  }
}

export type UserEntity = User

export default user