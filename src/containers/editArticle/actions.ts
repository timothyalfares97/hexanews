/**
 * Redux action class for edit article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'
import ArticleRepository from '../../domain/repository/ArticleRepository'

export const editArticle = (id: string, edittedArticle: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.edit(id, edittedArticle)
    if (response.data.code === 'SUCCESS') {
      dispatch({ type: ActionTypes.EDIT_ARTICLE_SUCCESS, article: response.data.message })
    } else {
      throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.EDIT_ARTICLE_FAILED })
  }
})()