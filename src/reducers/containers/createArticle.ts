/**
 * Redux reducers for createArticle container state in the application.
 */

import { combineReducers } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'

/**
 * isCreatingArticle state that will be changed based on actions in the application
 * @param state a collection of the current state of isCreatingArticle
 * @param action The trigger to mutate the isCreatingArticle in the Redux
 * @return payload containing the isCreatingArticle
 */
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

/**
 * createArticleError state that will be changed based on actions in the application
 * @param state a collection of the current state of createArticleError
 * @param action The trigger to mutate the createArticleError in the Redux
 * @return payload containing the createArticleError
 */
export const createArticleError = (state: string = '', action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTICLE_FAILED:
      return action.error
    case ActionTypes.CREATE_ARTICLE_REQUESTED:
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
    case ActionTypes.LOGOUT:
    case ActionTypes.LOCATION_CHANGE:
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