import { createStructuredSelector } from 'reselect'
import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User
}

const user = (state: State) => state.entities.user

export default createStructuredSelector<State, StateProps>({
  user
})