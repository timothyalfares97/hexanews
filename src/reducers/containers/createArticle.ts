/**
 * Redux reducer for create article.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const isCreatingArticle = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTICLE_REQUESTED:
      return true
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
    case ActionTypes.CREATE_ARTICLE_FAILED:
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

export const createArticleError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTICLE_FAILED:
      return action.error
    case ActionTypes.CREATE_ARTICLE_REQUESTED:
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

export interface CreateArticleContainer {
  isCreatingArticle: boolean,
  createArticleError: string,
}

export default combineReducers<CreateArticleContainer>({
  isCreatingArticle,
  createArticleError,
})