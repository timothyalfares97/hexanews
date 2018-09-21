import { createStructuredSelector, createSelector } from 'reselect'
import { find, filter, sampleSize } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

export interface StateProps {
  articles: Article[]
  authorName: string
  user: User,
  users: User[]
  userArticle: Article
  isUserArticle: boolean
  footerArticles: Article[]
  isDeletingArticle: boolean
  isEditingArticle: boolean
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

const user = (state: State) => state.entities.user

const isDeletingArticle = (state: State) => state.containers.articleDetail.isDeletingArticle

const isEditingArticle = (state: State) => state.containers.articleDetail.isEditingArticle

export default createStructuredSelector({
  articles,
  user,
  users,
  userArticle,
  isUserArticle,
  footerArticles,
  isDeletingArticle,
  isEditingArticle,
})