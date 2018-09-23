/**
 * Selector that fetches data from redux store and maps it as props for Article Detail container
 */

import { createStructuredSelector, createSelector } from 'reselect'
import { find, filter, sampleSize } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

export interface StateProps {
  articles: Article[]
  authorName: string
  users: User[]
  userArticle: Article
  isUserArticle: boolean
  footerArticles: Article[]
  isDeletingArticle: boolean
}

const articles = (state: State) => state.entities.articles

const users = (state: State) => state.entities.users

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
  (articles, userArticle) => {
    const filteredArticles = filter(articles, article => {
      const articleCategory = userArticle ? userArticle.category : ''
      const isSameWithCurrentArticle = userArticle ? article._id !== userArticle._id : false
      return article.category === articleCategory && isSameWithCurrentArticle
    })
    const randomThreeFilteredArticles = sampleSize(filteredArticles, 3)
    return randomThreeFilteredArticles
  }
)

const isDeletingArticle = (state: State) => state.containers.articleDetail.isDeletingArticle

export default createStructuredSelector({
  articles,
  users,
  userArticle,
  isUserArticle,
  footerArticles,
  isDeletingArticle,
})