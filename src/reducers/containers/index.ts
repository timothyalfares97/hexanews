/**
 * Redux reducer for the containers index.
 */

import { combineReducers } from 'redux'

import header, { HeaderContainer } from './header'
import createArticle, { CreateArticleContainer } from './createArticle'
import articleDetail, { ArticleDetailContainer } from './articleDetail'
import changePasswordForm, { ChangePasswordFormContainer } from './changePasswordForm'
import profileForm, { ProfileFormContainer } from './profileForm'

export interface Containers {
  articleDetail: ArticleDetailContainer
  changePasswordForm: ChangePasswordFormContainer
  createArticle: CreateArticleContainer
  profileForm: ProfileFormContainer
  header: HeaderContainer
}

export default combineReducers<Containers>({
  articleDetail,
  changePasswordForm,
  createArticle,
  header,
  profileForm,
})