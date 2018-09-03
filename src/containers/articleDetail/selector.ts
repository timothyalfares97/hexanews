import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'

export interface StateProps {
  userArticle: Article
  isUserArticle: boolean
  isDeletingArticle: boolean
}

const userArticle = createSelector(
  (state: State) => state.entities.articles,
  (_: State, props: any) => props.match.params.articleId,
  (articles, articleId) => find(articles, article => article._id === articleId)
)

const isUserArticle = createSelector(
  userArticle,
  (article) => {
    const id = localStorage.getItem('id')
    return article ? article.authorId === id : false
  }
)

const isDeletingArticle = (state: State) => state.containers.articleDetail.isDeletingArticle

export default createStructuredSelector({
  userArticle,
  isUserArticle,
  isDeletingArticle,
})