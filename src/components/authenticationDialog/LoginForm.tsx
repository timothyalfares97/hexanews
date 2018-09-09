/**
 * Display login form component.
 */

import * as React from 'react'
import { Dispatch } from 'redux'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import * as actions from './actions'
import styles from './styles'
import { loginFormString } from '../../constants/string'

type Props = {
  dispatch: Dispatch<any>,
  isLoadingLogin: boolean,
  handleCloseDialog: () => void,
  onChangeForgotPassword: () => void,
  onChangeAuthenticationState: () => void,
  loginError: string,
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

  disableSignInButton() {
    const { email, password } = this.state
    return (email === '' || password === '')
  }

  onLogin = async () => {
    const { email, password } = this.state
    const { dispatch, handleCloseDialog } = this.props

    await dispatch(actions.loginUser(email, password))

    const { loginError } = this.props

    this.setState({ email: '', password: '' })

    if (loginError === '') {
      handleCloseDialog()
    }
  }

  render() {
    const { handleCloseDialog, onChangeAuthenticationState, onChangeForgotPassword, isLoadingLogin, loginError } = this.props
    const { email, password } = this.state
    return (
      <div>
        <ValidatorForm
          ref='loginForm'
          onSubmit={() => this.onLogin()}
          instantValidate={false}
        >
          <DialogTitle>
            {loginFormString.dialogTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={styles.descriptionContainer}>
              {loginFormString.dialogDescription}
            </DialogContentText>
            <TextValidator
              label='Email Address'
              onChange={(event: any) => this.setState({ email: event.target.value })}
              name='loginEmail'
              style={styles.descriptionContainer}
              margin='dense'
              fullWidth
              type='email'
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['Please enter email', 'Please enter a valid email']}
            />
            <TextValidator
              label='Password'
              onChange={(event: any) => this.setState({ password: event.target.value })}
              name='loginPassword'
              margin='dense'
              fullWidth
              type='password'
              value={password}
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={['Please enter password',
                'Password length must be between 6-20 characters and contains no special character']}
            />
            <span style={styles.errorLoginLabel}>
              {loginError}
            </span>
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
            <Button
              color='primary'
              disabled={this.disableSignInButton()}
              type='submit'
            >
              {isLoadingLogin ? <CircularProgress size={22} /> : loginFormString.submitButton}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default LoginForm