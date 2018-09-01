/**
 * Display login form component.
 */

import * as React from 'react'
import { Dispatch } from 'redux'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import * as actions from './actions'
import styles from './styles'
import { loginFormString } from '../../constants/string'

type Props = {
  dispatch: Dispatch<any>,
  isLoadingLogin: boolean,
  handleCloseDialog: () => void,
  onChangeForgotPassword: () => void,
  onChangeAuthenticationState: () => void,
}

interface ComponentState {
  email: string
  password: string
}

class LoginForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onLogin = async () => {
    const { email, password } = this.state
    const { dispatch, handleCloseDialog } = this.props

    await dispatch(actions.loginUser(email, password))
    handleCloseDialog()
  }

  render() {
    const { handleCloseDialog, onChangeAuthenticationState, onChangeForgotPassword, isLoadingLogin } = this.props
    return (
      <div>
        <DialogTitle>
          {loginFormString.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {loginFormString.dialogDescription}
          </DialogContentText>
          <TextField
            margin='dense'
            id='loginEmail'
            label='Email Address'
            type='email'
            onChange={(event: any) => this.setState({ email: event.target.value })}
            fullWidth
            style={styles.descriptionContainer}
          />
          <TextField
            margin='dense'
            id='loginPassword'
            label='Password'
            onChange={(event: any) => this.setState({ password: event.target.value })}
            type='password'
            fullWidth
          />
          <DialogContentText style={styles.forgotPasswordContainer}>
            <span
              onClick={onChangeForgotPassword}
              style={styles.footerLink}
            >
              {loginFormString.forgotPasswordLabel}
            </span>
          </DialogContentText>
          <DialogContentText style={styles.footerContainer}>
            {loginFormString.noAccountLabel}
            <span
              onClick={onChangeAuthenticationState}
              style={styles.footerLink}
            >
              {loginFormString.registerHereLabel}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            {loginFormString.cancelButton}
          </Button>
          <Button onClick={() => this.onLogin()} color='primary'>
            {isLoadingLogin ? <CircularProgress size={22}/> : loginFormString.submitButton}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default LoginForm