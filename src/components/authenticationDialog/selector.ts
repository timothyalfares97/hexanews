import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'

export interface StateProps {
  isLoadingRegister: boolean
  isLoadingLogin: boolean
  loginError: string
  registerError: string
}

const isLoadingRegister = (state: State) => state.containers.authenticationDialog.isLoadingRegister

const isLoadingLogin = (state: State) => state.containers.authenticationDialog.isLoadingLogin

const loginError = (state: State) => state.containers.authenticationDialog.loginError

const registerError = (state: State) => state.containers.authenticationDialog.registerError

export default createStructuredSelector<State, StateProps>({
  isLoadingRegister,
  isLoadingLogin,
  loginError,
  registerError,
})