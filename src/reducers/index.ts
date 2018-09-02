/**
 * Redux reducer for the main application.
 */

import { combineReducers } from 'redux'

import entities, { Entities } from './entities'
import containers, { Containers } from './containers'
import isLoggedIn, { IsLoggedIn } from './isLoggedIn'

export interface State {
  containers: Containers
  entities: Entities
  isLoggedIn: IsLoggedIn
}

export default combineReducers<State>({
  containers,
  entities,
  isLoggedIn,
})