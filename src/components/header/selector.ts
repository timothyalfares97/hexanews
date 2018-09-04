import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'

export interface StateProps {
  isLoadingRegister: boolean
  isLoadingLogin: boolean
  loginError: string
  isLoggedIn: boolean
}

const isLoadingRegister = (state: State) => state.containers.header.isLoadingRegister

const isLoadingLogin = (state: State) => state.containers.header.isLoadingLogin

const loginError = (state: State) => state.containers.header.loginError

const isLoggedIn = (state: State) => state.isLoggedIn

export default createStructuredSelector<State, StateProps>({
  isLoadingRegister,
  isLoadingLogin,
  isLoggedIn,
  loginError,
})