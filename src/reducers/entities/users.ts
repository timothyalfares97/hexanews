/**
 * Redux reducers for all users state in the application.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { User } from '../../domain/model/User'

/**
 * Users state that will be changed based on actions in the application
 * @param state a collection of the current state of users
 * @param action The trigger to mutate all users in the Redux
 * @return payload containing the users
 */
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