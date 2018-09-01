/**
 * Redux reducer for the containers index.
 */
import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'

export type Containers = {
  header: HeaderContainer,
}

export default combineReducers<Containers>({
  header,
})