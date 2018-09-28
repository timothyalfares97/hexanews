/**
 * Redux action class for create article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'
import { handleResponseMessage } from '../../actions/handleResponseMessage'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import ArticleRepository from '../../domain/repository/ArticleRepository'

 /**
  * Create article action that connecting to server and manage the state data from it
  * @param article the newly created article
  */
export const createArticle = (article: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.CREATE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.create(article)
    const successAction = () => dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, article: response.data.message })
    handleResponseMessage(response, successAction)
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.CREATE_ARTICLE_FAILED, error: mappedError })
  }
})()
