import { combineReducers } from 'redux'

import user, { UserContainer } from './user'

export interface State {
  user: UserContainer
}

export default combineReducers<State>({
  user
})