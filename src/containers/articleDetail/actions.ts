/**
 * Redux action class for article detail.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'

export const deleteArticle = (id: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.DELETE_ARTICLE_REQUESTED })
  try {
    await ArticleRepository.delete(id)
    dispatch({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, id: id })
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_ARTICLE_FAILED })
  }
})()
