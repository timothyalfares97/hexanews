/**
 * Redux reducers for editArticle container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * isEditingArticle state that will be changed based on actions in the application
 * @param state a collection of the current state of isEditingArticle
 * @param action The trigger to mutate the isEditingArticle in the Redux
 * @return payload containing the isEditingArticle
 */
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

/**
 * editArticleError state that will be changed based on actions in the application
 * @param state a collection of the current state of editArticleError
 * @param action The trigger to mutate the editArticleError in the Redux
 * @return payload containing the editArticleError
 */
export const editArticleError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.EDIT_ARTICLE_FAILED:
      return action.error
    case ActionTypes.EDIT_ARTICLE_REQUESTED:
    case ActionTypes.EDIT_ARTICLE_SUCCESS:
    case ActionTypes.LOGOUT:
      return ''
    default:
      return state
  }
}

export interface EditArticleContainer {
  isEditingArticle: boolean
  editArticleError: string
}

export default combineReducers<EditArticleContainer>({
  isEditingArticle,
  editArticleError
})