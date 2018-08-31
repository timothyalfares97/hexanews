/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import user, { UserEntities } from './user'

export type Entities = {
  user: UserEntities,
}

export default combineReducers<Entities>({
  user,
})