/**
 * Selector that fetches data from redux store and maps it as props for Profile container
 */

import { createStructuredSelector, createSelector } from 'reselect'
import { filter } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User,
  userArticles: Article[]
}

const user = (state: State) => state.entities.user

const userArticles = createSelector(
  (state: State) => state.entities.articles,
  user,
  (articles, user) => {
    const filterCondition = (article: Article) => {
      const currentId = user._id
      return article.authorId === currentId
    }
    return filter(articles, filterCondition)
  }
)

export default createStructuredSelector({
  user,
  userArticles
})