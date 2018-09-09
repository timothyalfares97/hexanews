import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User
  isEditingUser: boolean
}

const user = (state: State) => state.entities.user
const isEditingUser = (state: State) => state.containers.account.isEditingUser

export default createStructuredSelector<State, StateProps>({
  user,
  isEditingUser,
})