/**
 * Redux action class for article detail.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'

/**
 * Delete article action that connecting to server and manage the state data from it
 * @param id the article id to be deleted
 */
export const deleteArticle = (id: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.DELETE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.delete(id)
    switch (response.data.code) {
      case 'SUCCESS':
        dispatch({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, id: id })
        break
      case 'JWTERROR':
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_ARTICLE_FAILED })
  }
})()
