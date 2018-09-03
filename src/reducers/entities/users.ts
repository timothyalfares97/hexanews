/**
 * Redux reducer for the users.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'

type UsersAction = {
  type: ActionTypes.GET_USERS,
  users: User[],
}

const users = (state: User[] = [], action: UsersAction) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.users
    default:
      return state
  }
}

export type UserEntities = User[]

export default users