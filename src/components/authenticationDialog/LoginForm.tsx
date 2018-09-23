/**
 * The Login Form Component for user to login in header container
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
import i18n from '../../i18n'

/**
 * All props required by the components
 */
export type Props = {
  dispatch: Dispatch<any>,
  isLoadingLogin: boolean,
  handleCloseDialog: () => void,
  onChangeForgotPassword: () => void,
  onChangeAuthenticationState: () => void,
  handleOpenLoginSnackbar: () => void,
  loginError: string,
}

/**
 * All state required by the components
 */
export interface ComponentState {
  email: string
  password: string
}

class LoginForm extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Login form and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  /**
   * Function to disable sign in button if email or password are empty
   */
  disableSignInButton() {
    const { email, password } = this.state
    return (email === '' || password === '')
  }

  /**
   * Function that call login action and open success snackbar if success
   */
  onLogin = async () => {
    const { email, password } = this.state
    const { dispatch, handleCloseDialog, handleOpenLoginSnackbar } = this.props

    await dispatch(actions.loginUser(email, password))

    const { loginError } = this.props

    this.setState({ email: '', password: '' })

    if (loginError === '') {
      handleCloseDialog()
      handleOpenLoginSnackbar()
    }
  }

  /**
   * Render Login form component
   */
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
            {i18n.t('loginForm.dialogTitle')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={styles.descriptionContainer}>
              {i18n.t('loginForm.dialogDescription')}
            </DialogContentText>
            <TextValidator
              label={i18n.t('loginForm.emailAddress')}
              onChange={(event: any) => this.setState({ email: event.target.value })}
              name='loginEmail'
              style={styles.descriptionContainer}
              margin='dense'
              fullWidth
              type='email'
              value={email}
              helperText=' '
              validators={['required', 'isEmail']}
              errorMessages={[i18n.t('loginForm.enterEmail'), i18n.t('loginForm.enterValidEmail')]}
            />
            <TextValidator
              label={i18n.t('loginForm.password')}
              onChange={(event: any) => this.setState({ password: event.target.value })}
              name='loginPassword'
              margin='dense'
              fullWidth
              type='password'
              value={password}
              helperText=' '
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={[i18n.t('loginForm.enterPassword'), i18n.t('loginForm.passwordRequirement')]}
            />
            <DialogContentText>
              <span style={styles.errorLoginLabel}>
                {loginError}
              </span>
            </DialogContentText>
            <DialogContentText style={styles.forgotPasswordContainer}>
              <span
                onClick={onChangeForgotPassword}
                style={styles.footerLink}
              >
                {i18n.t('loginForm.forgotPasswordLabel')}
              </span>
            </DialogContentText>
            <DialogContentText style={styles.footerContainer}>
              {i18n.t('loginForm.noAccountLabel')}
              <span
                onClick={onChangeAuthenticationState}
                style={styles.footerLink}
              >
                {i18n.t('loginForm.registerHereLabel')}
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              {i18n.t('loginForm.cancelButton')}
            </Button>
            <Button
              color='primary'
              disabled={this.disableSignInButton()}
              type='submit'
            >
              {isLoadingLogin ? <CircularProgress size={22} /> : i18n.t('loginForm.submitButton')}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default LoginForm