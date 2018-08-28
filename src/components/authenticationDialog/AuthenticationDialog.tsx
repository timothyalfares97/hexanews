import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ForgotPasswordForm from './ForgotPasswordForm'

type Props = {
  showDialog: boolean
  handleCloseDialog: () => void
}

interface ComponentState {
  email: string
  password: string
  authenticationState: string
}

class AuthenticationDialog extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authenticationState: 'login'
    }
  }

  onChangeAuthenticationState = (value: string) => {
    this.setState({ authenticationState: value })
  }

  renderAuthenticationForm = () => {
    const { authenticationState } = this.state
    const { handleCloseDialog } = this.props

    switch (authenticationState) {
      case 'login':
        return (
          <LoginForm
            onChangeForgotPassword={() => this.onChangeAuthenticationState('forgotPassword')}
            onChangeAuthenticationState={() => this.onChangeAuthenticationState('register')}
            handleCloseDialog={handleCloseDialog}
          />
        )
      case 'register':
        return (
          <RegisterForm
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

  public render() {
    const { showDialog } = this.props
    return (
      <Dialog open={showDialog}>
        {this.renderAuthenticationForm()}
      </Dialog>
    )
  }
}

export default AuthenticationDialog