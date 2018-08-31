/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'

type UserAction = {
  type: ActionTypes.GET_USER | ActionTypes.LOGOUT,
  user: User,
}

const initialUser = {
  _id: '',
  email: '',
  name: '',
  createdAt: '',
}

const user = (state: User = initialUser, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return action.user
    case ActionTypes.LOGOUT:
      return initialUser
    default:
      return state
  }
}

export type UserEntities = {
  user: User,
}

export default combineReducers<UserEntities>({
  user,
})