/**
 * Redux reducer for the containers index.
 */
import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'
import createArticle, { CreateArticleContainer } from './createArticle'

export type Containers = {
  createArticle: CreateArticleContainer,
  header: HeaderContainer,
}

export default combineReducers<Containers>({
  createArticle,
  header,
})