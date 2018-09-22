/**
 * Redux reducer for edit article.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

export const isEditingArticle = (state: boolean = false, action: any) => {
  switch (action.type) {
    case ActionTypes.EDIT_ARTICLE_REQUESTED:
      return true
    case ActionTypes.EDIT_ARTICLE_SUCCESS:
    case ActionTypes.EDIT_ARTICLE_FAILED:
    case ActionTypes.LOGOUT:
      return false
    default:
      return state
  }
}

export interface EditArticleContainer {
  isEditingArticle: boolean,
}

export default combineReducers<EditArticleContainer>({
  isEditingArticle
})