import { createStructuredSelector, createSelector } from 'reselect'
import { filter } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'

export interface StateProps {
  categoryArticles: Article[]
  categoryTitle: string
}

const categoryArticles = createSelector(
  (state: State) => state.entities.articles,
  (_: State, props: any) => props.match.params.category,
  (articles, category) => {
    const filterCondition = (article: Article) => {
      const lowercaseCategory = article.category ? article.category.toLowerCase() : ''
      return lowercaseCategory === category
    }
    return filter(articles, filterCondition)
  }
)

const categoryTitle = (_: State, props: any) => props.match.params.category

export default createStructuredSelector({
  categoryArticles,
  categoryTitle
})