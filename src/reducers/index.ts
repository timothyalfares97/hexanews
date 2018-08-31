/**
 * Redux reducer for the main application.
 */
import { combineReducers } from 'redux'

import entities, { Entities } from './entities'

export interface State {
  entities: Entities
}

export default combineReducers<State>({
  entities
})