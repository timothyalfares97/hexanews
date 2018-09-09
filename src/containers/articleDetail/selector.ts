import { createStructuredSelector, createSelector } from 'reselect'
import { find, filter, sampleSize } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'

export interface StateProps {
  footerArticles: Article[]
  isDeletingArticle: boolean
  isUserArticle: boolean
  userArticle: Article
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

const footerArticles = createSelector(
  (state: State) => state.entities.articles,
  userArticle,
  isUserArticle,
  (articles, userArticle, isUserArticle) => {
    const filteredArticles = filter(articles, article => {
      const articleCategory = userArticle ? userArticle.category : ''
      return article.category === articleCategory && !isUserArticle
    })
    const randomThreeFilteredArticles = sampleSize(filteredArticles, 3)
    return randomThreeFilteredArticles
  }
)

const isDeletingArticle = (state: State) => state.containers.articleDetail.isDeletingArticle

export default createStructuredSelector({
  footerArticles,
  isDeletingArticle,
  isUserArticle,
  userArticle,
})