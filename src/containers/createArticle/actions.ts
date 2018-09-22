/**
 * Redux action class for create article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'
import { Article } from '../../domain/model/Article'

export const createArticle = (article: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.CREATE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.create(article)
    if (response.data.code === 'SUCCESS') {
      dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS, article: response.data.message })
    } else {
      throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.CREATE_ARTICLE_FAILED, error: error })
  }
})()
