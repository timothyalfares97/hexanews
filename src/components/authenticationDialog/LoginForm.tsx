/**
 * The Login Form Component for user to login in header container
 */

import { Dispatch } from 'redux'
import { Grid, Typography } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import * as actions from './actions'
import i18n from '../../i18n'
import styles from './styles'

/**
 * All props required by the components
 */
export type Props = {
  dispatch: Dispatch<any>,
  handleCloseDialog: () => void,
  handleOpenLoginSnackbar: () => void,
  isLoadingLogin: boolean,
  loginError: string,
  onChangeAuthenticationState: () => void,
  onChangeForgotPassword: () => void,
}

/**
 * All state required by the components
 */
export interface ComponentState {
  email: string
  password: string
}

export default class LoginForm extends React.Component<Props, ComponentState> {

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
   * Function that will render login content
   */
  renderLoginContent = () => {
    const {
      onChangeAuthenticationState,
      onChangeForgotPassword,
      loginError,
    } = this.props
    const { email, password } = this.state
    return (
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
          <Typography style={styles.errorLoginLabel}>
            {loginError}
          </Typography>
        </DialogContentText>
        <DialogContentText style={styles.forgotPasswordContainer}>
          <Typography
            onClick={onChangeForgotPassword}
            style={styles.footerLink}
            variant='body1'
          >
            {i18n.t('loginForm.forgotPasswordLabel')}
          </Typography>
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
    )
  }

  /**
   * Render Login form component
   */
  render() {
    const {
      handleCloseDialog,
      isLoadingLogin,
    } = this.props
    return (
      <Grid>
        <ValidatorForm
          ref='loginForm'
          onSubmit={() => this.onLogin()}
          instantValidate={false}
        >
          <DialogTitle>
            {i18n.t('loginForm.dialogTitle')}
          </DialogTitle>
          {this.renderLoginContent()}
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
      </Grid>
    )
  }
}