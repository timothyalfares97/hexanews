/**
 * Selector file that will grab all required value from redux store.
 */

import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User
  isEditingUser: boolean
  editUserError: string
}

const user = (state: State) => state.entities.user

const isEditingUser = (state: State) => state.containers.profileForm.isEditingUser

const editUserError = (state: State) => state.containers.profileForm.editUserError

export default createStructuredSelector<State, StateProps>({
  editUserError,
  isEditingUser,
  user,
})