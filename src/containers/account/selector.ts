import { createStructuredSelector } from 'reselect'
import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User,
  isEditingUser: boolean,
  isChangingPassword: boolean,
}

const user = (state: State) => state.entities.user
const isEditingUser = (state: State) => state.containers.account.isEditingUser
const isChangingPassword = (state: State) => state.containers.account.isChangingPassword

export default createStructuredSelector<State, StateProps>({
  user,
  isEditingUser,
  isChangingPassword
})