/**
 * Redux action class for article detail.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import ArticleRepository from '../../domain/repository/ArticleRepository'

/**
 * Delete article action that connecting to server and manage the state data from it
 * @param id the article id to be deleted
 */
export const deleteArticle = (id: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.DELETE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.delete(id)
    const successAction = () => dispatch({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, id: id })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.DELETE_ARTICLE_FAILED, error: mappedError })
  }
})()
