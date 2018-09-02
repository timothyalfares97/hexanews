/**
 * Redux reducer for the containers index.
 */
import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'
import createArticle, { CreateArticleContainer } from './createArticle'
import account, { AccountContainer } from './account'

export type Containers = {
  account: AccountContainer,
  createArticle: CreateArticleContainer,
  header: HeaderContainer,
}

export default combineReducers<Containers>({
  account,
  createArticle,
  header,
})