/**
 * Redux reducer for the containers index.
 */

import { combineReducers } from 'redux'

import authenticationDialog, { AuthenticationDialogContainer } from './authenticationDialog'
import createArticle, { CreateArticleContainer } from './createArticle'
import articleDetail, { ArticleDetailContainer } from './articleDetail'
import changePasswordForm, { ChangePasswordFormContainer } from './changePasswordForm'
import profileForm, { ProfileFormContainer } from './profileForm'

export interface Containers {
  articleDetail: ArticleDetailContainer
  changePasswordForm: ChangePasswordFormContainer
  createArticle: CreateArticleContainer
  profileForm: ProfileFormContainer
  authenticationDialog: AuthenticationDialogContainer
}

export default combineReducers<Containers>({
  articleDetail,
  authenticationDialog,
  changePasswordForm,
  createArticle,
  profileForm,
})