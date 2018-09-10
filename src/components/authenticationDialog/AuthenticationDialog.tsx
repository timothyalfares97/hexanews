/**
 * Display authentication dialog component.
 */

import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { Dispatch } from 'redux'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'

export type Props = {
  dispatch: Dispatch<any>
  showDialog: boolean
  isLoadingRegister: boolean
  isLoadingLogin: boolean
  handleCloseDialog: () => void
  loginError: string
}

export interface ComponentState {
  authenticationState: string
}

class AuthenticationDialog extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      authenticationState: 'login'
    }
  }

  onChangeAuthenticationState = (value: string) => {
    this.setState({ authenticationState: value })
  }

  renderAuthenticationForm = () => {
    const { authenticationState } = this.state
    const { handleCloseDialog, dispatch, isLoadingLogin, isLoadingRegister, loginError } = this.props

    switch (authenticationState) {
      case 'login':
        return (
          <LoginForm
            dispatch={dispatch}
            isLoadingLogin={isLoadingLogin}
            onChangeForgotPassword={() => this.onChangeAuthenticationState('forgotPassword')}
            onChangeAuthenticationState={() => this.onChangeAuthenticationState('register')}
            handleCloseDialog={handleCloseDialog}
            loginError={loginError}
          />
        )
      case 'register':
        return (
          <RegisterForm
            dispatch={dispatch}
            isLoadingRegister={isLoadingRegister}
            onChangeAuthenticationState={() => this.onChangeAuthenticationState('login')}
            handleCloseDialog={handleCloseDialog}
          />
        )
      case 'forgotPassword':
        return (
          <ForgotPasswordForm
            onChangeAuthenticationState={() => this.onChangeAuthenticationState('login')}
            handleCloseDialog={handleCloseDialog}
          />
        )
      default:
        return
    }
  }

  render() {
    const { showDialog } = this.props
    return (
      <Dialog open={showDialog}>
        {this.renderAuthenticationForm()}
      </Dialog>
    )
  }
}

export default AuthenticationDialog