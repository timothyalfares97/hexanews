/**
 * Selector that fetches data from redux store and maps it as props for Home container
 */

import { createStructuredSelector } from 'reselect'

import { Article } from '../../domain/model/Article'
import { Category } from '../../domain/model/Category'
import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  articles: Article[]
  categories: Category[]
  users: User[]
}

const articles = (state: State) => state.entities.articles

const users = (state: State) => state.entities.users

const categories = (state: State) => state.entities.categories

export default createStructuredSelector<State, StateProps>({
  articles,
  categories,
  users,
})