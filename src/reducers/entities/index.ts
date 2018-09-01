/**
 * Redux reducer for the user.
 */
import { combineReducers } from 'redux'

import user, { UserEntities } from './user'
import articles, { ArticleEntities } from './articles'

export type Entities = {
  user: UserEntities,
  articles: ArticleEntities
}

export default combineReducers<Entities>({
  articles,
  user,
})