import { createStructuredSelector, createSelector } from 'reselect'
import { filter } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'

export interface StateProps {
  userArticles: Article[]
}

const userArticles = createSelector(
  (state: State) => state.entities.articles,
  (articles) => {
    const filterCondition = (article: Article) => {
      const currentId = localStorage.getItem('id')
      return article.authorId === currentId
    }
    return filter(articles, filterCondition)
  }
)

export default createStructuredSelector({
  userArticles
})