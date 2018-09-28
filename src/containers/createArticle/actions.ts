/**
 * Redux action class for create article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'
import { mapErrorMessage } from '../../actions/mapErrorMessage'
import { RESPONSE_CODE } from '../../constants/config'
import ArticleRepository from '../../domain/repository/ArticleRepository'

 /**
  * Create article action that connecting to server and manage the state data from it
  * @param article the newly created article
  */
export const createArticle = (article: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.CREATE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.create(article)
    switch (response.data.code) {
      case RESPONSE_CODE.success:
        dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, article: response.data.message })
        break
      case RESPONSE_CODE.jwtError:
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    const mappedError = mapErrorMessage(error)
    dispatch({ type: ActionTypes.CREATE_ARTICLE_FAILED, error: mappedError })
  }
})()
