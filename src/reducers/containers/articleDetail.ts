/**
 * Redux reducers for articleDetail container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * isDeletingArticle state that will be changed based on actions in the application
 * @param state a collection of the current state of isDeletingArticle
 * @param action The trigger to mutate the isDeletingArticle in the Redux
 * @return payload containing the isDeletingArticle
 */
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

export interface ArticleDetailContainer {
  isDeletingArticle: boolean,
}

export default combineReducers<ArticleDetailContainer>({
  isDeletingArticle,
})