/**
 * Redux action class for authentication dialog.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'
import { Article } from '../../domain/model/Article'

export const createArticle = (article: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.CREATE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.createArticle(article)
    if (response.data) {
      dispatch({ type: ActionTypes.CREATE_ARTICLE_SUCCESS })
    }
  } catch (error) {
    dispatch({ type: ActionTypes.CREATE_ARTICLE_FAILED })
  }
})()
