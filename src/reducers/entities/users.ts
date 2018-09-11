/**
 * Redux reducer for the users.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'

const users = (state: User[] = [], action: any = {}) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return action.users
    default:
      return state
  }
}

export type UserEntities = User[]

export default users