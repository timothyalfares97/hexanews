/**
 * Redux reducer for the containers index.
 */
import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'

export type Entities = {
  header: HeaderContainer,
}

export default combineReducers<Entities>({
  header,
})