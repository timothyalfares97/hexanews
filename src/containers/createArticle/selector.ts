import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User,
  isCreatingArticle: boolean
}

const user = (state: State) => state.entities.user
const isCreatingArticle = (state: State) => state.containers.createArticle.isCreatingArticle

export default createStructuredSelector<State, StateProps>({
  user,
  isCreatingArticle
})