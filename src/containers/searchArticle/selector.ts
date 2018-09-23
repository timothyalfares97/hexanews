/**
 * Selector that fetches data from redux store and maps it as props for Search Article container
 */

import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

export interface StateProps {
  articles: Article[]
  users: User[]
}

const articles = (state: State) => state.entities.articles

const users = (state: State) => state.entities.users

export default createStructuredSelector<State, StateProps>({
  articles,
  users,
})