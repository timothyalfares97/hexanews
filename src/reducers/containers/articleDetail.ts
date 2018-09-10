/**
 * Redux reducer for article detail.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const isDeletingArticle = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.DELETE_ARTICLE_REQUESTED:
      return true
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
    case ActionTypes.DELETE_ARTICLE_FAILED:
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

export type ArticleDetailContainer = {
  isDeletingArticle: boolean,
}

export default combineReducers<ArticleDetailContainer>({
  isDeletingArticle
})