import { createStructuredSelector } from 'reselect'
import { State } from '../../reducers'

export interface StateProps {
  isCreatingArticle: boolean
}

const isCreatingArticle = (state: State) => state.containers.createArticle.isCreatingArticle

export default createStructuredSelector<State, StateProps>({
  isCreatingArticle
})