/**
 * Redux action class for article detail.
 */

import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import { ActionTypes } from '../../actions/ActionTypes'
import ArticleRepository from '../../domain/repository/ArticleRepository'

export const deleteArticle = (id: string) => (dispatch: Dispatch<any>) => (async () => {
  dispatch({ type: ActionTypes.DELETE_ARTICLE_REQUESTED })
  try {
    const response = await ArticleRepository.delete(id)
    console.log(response)
    if (response.data.code === 'SUCCESS') {
      dispatch({ type: ActionTypes.DELETE_ARTICLE_SUCCESS, id: id })
      dispatch(push('/profile'))
    } else {
      throw response.data.message
    }
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_ARTICLE_FAILED, error: error })
  }
})()
