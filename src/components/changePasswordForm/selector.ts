/**
 * Selector that fetches data from redux store and maps it as props for Change Password Form
 */

import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'
import { User } from '../../domain/model/User'

export interface StateProps {
  user: User
  isChangingPassword: boolean
  changePasswordError: string
}

const user = (state: State) => state.entities.user

const isChangingPassword = (state: State) => state.containers.changePasswordForm.isChangingPassword

const changePasswordError = (state: State) => state.containers.changePasswordForm.changePasswordError

export default createStructuredSelector<State, StateProps>({
  user,
  isChangingPassword,
  changePasswordError
})