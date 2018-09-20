/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import user, { UserEntity } from './user'
import users, { UserEntities } from './users'
import articles, { ArticleEntities } from './articles'
import categories, { CategoryEntities } from './categories'

export type Entities = {
  articles: ArticleEntities,
  categories: CategoryEntities
  user: UserEntity,
  users: UserEntities
}

export default combineReducers<Entities>({
  articles,
  categories,
  user,
  users,
})