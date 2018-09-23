/**
 * Selector that fetches data from redux store and maps it as props for Authentication Dialog Form
 */

import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'

export interface StateProps {
  isLoadingRegister: boolean
  isLoadingLogin: boolean
  isLoadingForgotPassword: boolean
  loginError: string
  registerError: string
  forgotPasswordError: string
}

const isLoadingRegister = (state: State) => state.containers.authenticationDialog.isLoadingRegister

const isLoadingLogin = (state: State) => state.containers.authenticationDialog.isLoadingLogin

const isLoadingForgotPassword = (state: State) => state.containers.authenticationDialog.isLoadingForgotPassword

const loginError = (state: State) => state.containers.authenticationDialog.loginError

const registerError = (state: State) => state.containers.authenticationDialog.registerError

const forgotPasswordError = (state: State) => state.containers.authenticationDialog.forgotPasswordError

export default createStructuredSelector<State, StateProps>({
  isLoadingRegister,
  isLoadingLogin,
  isLoadingForgotPassword,
  loginError,
  registerError,
  forgotPasswordError,
})