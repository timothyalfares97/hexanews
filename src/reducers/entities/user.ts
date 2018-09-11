/**
 * Redux reducer for the user.
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