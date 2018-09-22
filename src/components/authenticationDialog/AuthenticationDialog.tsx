/**
 * Display authentication dialog component.
 */

import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'
import selector, { StateProps } from './selector'

export type Props = {
  dispatch: Dispatch<any>,
  showDialog: boolean,
  handleCloseDialog: () => void,
  handleOpenLoginSnackbar: () => void,
  handleOpenRegisterSnackbar: () => void,
} & StateProps

export interface ComponentState {
  authenticationState: string
  isLoginSnackbarOpen: boolean
}

export class AuthenticationDialog extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      authenticationState: 'login',
      isLoginSnackbarOpen: false,
    }
  }

  onChangeAuthenticationState = (value: string) => {
    this.setState({ authenticationState: value })
  }

  renderAuthenticationForm = () => {
    const { authenticationState } = this.state
    const {
      handleCloseDialog,
      dispatch,
      isLoadingLogin,
      isLoadingRegister,
      loginError,
      registerError,
      handleOpenLoginSnackbar,
      handleOpenRegisterSnackbar
    } = this.props

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
            handleOpenLoginSnackbar={handleOpenLoginSnackbar}
          />
        )
      case 'register':
        return (
          <RegisterForm
            dispatch={dispatch}
            isLoadingRegister={isLoadingRegister}
            registerError={registerError}
            onChangeAuthenticationState={() => this.onChangeAuthenticationState('login')}
            handleCloseDialog={handleCloseDialog}
            handleOpenRegisterSnackbar={handleOpenRegisterSnackbar}
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

const ConnectedAuthenticationDialog = connect(selector)(AuthenticationDialog)

export default translate('translations')(ConnectedAuthenticationDialog)