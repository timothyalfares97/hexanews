/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import user, { UserEntity } from './user'
import users, { UserEntities } from './users'
import articles, { ArticleEntities } from './articles'

export type Entities = {
  user: UserEntity,
  users: UserEntities
  articles: ArticleEntities,
}

export default combineReducers<Entities>({
  articles,
  user,
  users,
})