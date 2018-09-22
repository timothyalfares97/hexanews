import { createStructuredSelector, createSelector } from 'reselect'
import { find } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User
  userArticle: Article
  isUserArticle: boolean
  isEditingArticle: boolean
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

const user = (state: State) => state.entities.user

const isEditingArticle = (state: State) => state.containers.editArticle.isEditingArticle

export default createStructuredSelector({
  user,
  userArticle,
  isUserArticle,
  isEditingArticle,
})