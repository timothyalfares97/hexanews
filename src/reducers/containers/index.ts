/**
 * Redux reducer for the containers index.
 */
import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'
import createArticle, { CreateArticleContainer } from './createArticle'
import articleDetail, { ArticleDetailContainer } from './articleDetail'
import account, { AccountContainer } from './account'
import changePasswordForm, { ChangePasswordFormContainer } from './changePasswordForm'

export type Containers = {
  account: AccountContainer,
  articleDetail: ArticleDetailContainer,
  changePasswordForm: ChangePasswordFormContainer,
  createArticle: CreateArticleContainer,
  header: HeaderContainer,
}

export default combineReducers<Containers>({
  account,
  articleDetail,
  changePasswordForm,
  createArticle,
  header,
})