import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { Article } from '../../domain/model/Article'

export interface StateProps {
  articles: Article[]
}

const articles = (state: State) => state.entities.articles

export default createStructuredSelector<State, StateProps>({
  articles
})