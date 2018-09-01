/**
 * Redux reducer for the main application.
 */
import { combineReducers } from 'redux'

import entities, { Entities } from './entities'
import containers, { Containers } from './containers'
import history, { History } from './history'

export interface State {
  containers: Containers
  entities: Entities
  history: History
}

export default combineReducers<State>({
  containers,
  entities,
  history
})