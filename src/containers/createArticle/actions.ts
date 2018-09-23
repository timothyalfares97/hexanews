/**
 * Redux action class for create article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'
import { Article } from '../../domain/model/Article'

/**
 * Delete article action that connecting to server and manage the state data from it
 * @param id the article id to be deleted
 */

 /**
  * Create article action that connecting to server and manage the state data from it
  * @param article the newly created article
  */
export const createArticle = (article: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.CREATE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.create(article)
    switch (response.data.code) {
      case 'SUCCESS':
        dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, article: response.data.message })
        break
      case 'JWTERROR':
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.CREATE_ARTICLE_FAILED, error: error })
  }
})()
