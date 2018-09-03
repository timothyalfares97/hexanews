/**
 * Redux reducer for the articles.
 */

import { filter } from 'lodash'

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'

type ArticlesAction = {
  type: ActionTypes.GET_ARTICLES | ActionTypes.DELETE_ARTICLE_SUCCESS | ActionTypes.CREATE_ARTICLE_SUCCESS,
  articles: Article[],
  article: Article,
  id: string,
}

const articles = (state: Article[] = [], action: ArticlesAction) => {
  switch (action.type) {
    case ActionTypes.GET_ARTICLES:
      return action.articles
    case ActionTypes.CREATE_ARTICLE_SUCCESS:
      return [...state, action.article]
    case ActionTypes.DELETE_ARTICLE_SUCCESS:
      return filter(state, (article) => article._id !== action.id)
    default:
      return state
  }
}

export type ArticleEntities = Article[]

export default articles