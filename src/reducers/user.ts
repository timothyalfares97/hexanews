/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import { ActionTypes } from '../actions/ActionTypes'
import { User } from '../domain/model/User'

type UserProfileAction = {
  type: ActionTypes.GET_USER_PROFILE | ActionTypes.LOGOUT,
  user: User,
}

const initialUser = {
  _id: '',
  email: '',
  name: '',
  createdAt: '',
}

const userProfile = (state: User = initialUser, action: UserProfileAction) => {
  switch (action.type) {
    case ActionTypes.GET_USER_PROFILE:
      return action.user
    case ActionTypes.LOGOUT:
      return initialUser
    default:
      return state
  }
}

export type UserContainer = {
  userProfile: User,
}

export default combineReducers<UserContainer>({
  userProfile,
})