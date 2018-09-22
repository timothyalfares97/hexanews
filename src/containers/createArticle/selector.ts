import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  createArticleError: string
  isCreatingArticle: boolean
  user: User
}

const user = (state: State) => state.entities.user

const isCreatingArticle = (state: State) => state.containers.createArticle.isCreatingArticle

const createArticleError = (state: State) => state.containers.createArticle.createArticleError

export default createStructuredSelector<State, StateProps>({
  createArticleError,
  isCreatingArticle,
  user,
})