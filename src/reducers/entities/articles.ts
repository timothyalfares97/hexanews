/**
 * Redux reducers for articles state in the application.
 */

import { filter, map } from 'lodash'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'

/**
 * Articles state that will be changed based on actions in the application
 * @param state a collection of the current state of articles
 * @param action The trigger to mutate the articles in the Redux
 * @return payload containing the articles
 */
const articles = (state: Article[] = [], action: any = {}) => {
  switch (action.type) {
    case ActionTypes.GET_ARTICLES:
      return action.articles
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
      return [...state, action.article]
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
      return filter(state, (article) => article._id !== action.id)
    case ActionTypes.EDIT_ARTICLE_SUCCESS:
      return map(state, (article) => {
        if (article._id === action.article._id) {
          return action.article
        }
        return article
      })
    default:
      return state
  }
}

export type ArticleEntities = Article[]

export default articles