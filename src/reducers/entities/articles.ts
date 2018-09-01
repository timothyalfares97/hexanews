/**
 * Redux reducer for the articles.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { Article } from '../../domain/model/Article'

type ArticlesAction = {
  type: ActionTypes.GET_ARTICLES,
  articles: Article[],
}

const articles = (state: Article[] = [], action: ArticlesAction) => {
  switch (action.type) {
    case ActionTypes.GET_ARTICLES:
      return action.articles
    default:
      return state
  }
}

export type ArticleEntities = Article[]

export default articles