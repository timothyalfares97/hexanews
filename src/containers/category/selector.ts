import { createStructuredSelector, createSelector } from 'reselect'
import { filter, find } from 'lodash'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'
import { Category } from '../../domain/model/Category'

export interface StateProps {
  categoryArticles: Article[]
  category: Category
  categories: Category[]
  users: User[]
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

const categories = (state: State) => state.entities.categories

const category = createSelector(
  categories,
  (_: State, props: any) => props.match.params.category,
  (categories, categoryTitle) => find(categories, category => category.title === categoryTitle)
)

const users = (state: State) => state.entities.users

export default createStructuredSelector({
  categoryArticles,
  category,
  users,
})