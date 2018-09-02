/**
 * Redux reducer for create article.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

const isCreatingArticle = (state: boolean = false, action: any) => {
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

export type CreateArticleContainer = {
  isCreatingArticle: boolean,
}

export default combineReducers<CreateArticleContainer>({
  isCreatingArticle
})