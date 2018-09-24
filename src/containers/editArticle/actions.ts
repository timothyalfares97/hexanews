/**
 * Redux action class for edit article.
 */

import { Dispatch } from 'redux'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'
import { RESPONSE_CODE } from '../../constants/config'
import ArticleRepository from '../../domain/repository/ArticleRepository'

/**
 * Edit article action that connecting to server and manage the state data from it
 * @param edittedArticle the article that wants to be editted
 */
export const editArticle = (edittedArticle: Article) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.EDIT_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.edit(edittedArticle)
    switch (response.data.code) {
      case RESPONSE_CODE.success:
        dispatch({ type: ActionTypes.EDIT_ARTICLE_SUCCESS, article: response.data.message })
        break
      case RESPONSE_CODE.jwtError:
        window.location.reload()
        throw response.data.message
      default:
        throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.EDIT_ARTICLE_FAILED, error: error })
  }
})()