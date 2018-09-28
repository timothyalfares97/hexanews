/**
 * Redux action class for edit article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import ArticleRepository from '../../domain/repository/ArticleRepository'

/**
 * Edit article action that connecting to server and manage the state data from it
 * @param edittedArticle the article that wants to be editted
 */
export const editArticle = (edittedArticle: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.edit(edittedArticle)
    const successAction = () => dispatch({ type: ActionTypes.EDIT_ARTICLE_SUCCESS, article: response.data.message })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.EDIT_ARTICLE_FAILED, error: mappedError })
  }
})()