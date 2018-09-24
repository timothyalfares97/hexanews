/**
 * The Forgot Password Form Component for user who forgot their password
 */

import { Dispatch } from 'redux'
import { Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import * as React from 'react'
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
  isLoadingForgotPassword: boolean,
  handleCloseDialog: () => void
  onChangeAuthenticationState: () => void,
  handleOpenForgotPasswordSnackbar: () => void,
  forgotPasswordError: string,
}

/**
 * All state required by the components
 */
export interface ComponentState {
  email: string
}

class ForgotPasswordForm extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Forgot Password form and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  /**
   * Function to disable submit button when email is empty
   */
  disableSubmitButton() {
    const { email } = this.state
    return (email === '')
  }

  /**
   * Function to call reset password action and open success snackbar if success
   */
  onForgotPassword = async () => {
    const { email } = this.state
    const { dispatch, handleCloseDialog, handleOpenForgotPasswordSnackbar } = this.props

    await dispatch(actions.resetPassword(email))

    const { forgotPasswordError } = this.props

    this.setState({ email: '' })

    if (forgotPasswordError === '') {
      handleCloseDialog()
      handleOpenForgotPasswordSnackbar()
    }
  }

  /**
   * Function to render forgot password content
   */
  renderForgotPasswordContent = () => {
    const { onChangeAuthenticationState, forgotPasswordError } = this.props
    const { email } = this.state
    return (
      <DialogContent>
        <DialogContentText style={styles.descriptionContainer}>
          {i18n.t('forgotPasswordForm.dialogDescription')}
        </DialogContentText>
        <TextValidator
          label={i18n.t('forgotPasswordForm.emailAddress')}
          onChange={(event: any) => this.setState({ email: event.target.value })}
          name='forgotPasswordEmail'
          style={styles.descriptionContainer}
          margin='dense'
          fullWidth
          type='email'
          value={email}
          helperText=' '
          validators={['required', 'isEmail']}
          errorMessages={[i18n.t('forgotPasswordForm.enterEmail'), i18n.t('forgotPasswordForm.enterValidEmail')]}
        />
        <DialogContentText>
          <span style={styles.errorLoginLabel}>
            {forgotPasswordError}
          </span>
        </DialogContentText>
        <DialogContentText style={styles.footerContainer}>
          <span
            onClick={onChangeAuthenticationState}
            style={styles.footerLink}
          >
            {i18n.t('forgotPasswordForm.backLogin')}
          </span>
        </DialogContentText>
      </DialogContent>
    )
  }

  /**
   * Render Forgot Password form component
   */
  public render() {
    const { handleCloseDialog, isLoadingForgotPassword } = this.props
    return (
      <Grid>
        <ValidatorForm
          ref='forgotPasswordForm'
          onSubmit={this.onForgotPassword}
          instantValidate={false}
        >
          <DialogTitle>
            {i18n.t('forgotPasswordForm.dialogTitle')}
          </DialogTitle>
          {this.renderForgotPasswordContent()}
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              {i18n.t('forgotPasswordForm.cancelButton')}
            </Button>
            <Button
              color='primary'
              disabled={this.disableSubmitButton()}
              type='submit'
            >
              {isLoadingForgotPassword ? <CircularProgress size={22} /> : i18n.t('forgotPasswordForm.submitButton')}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Grid>
    )
  }
}

export default ForgotPasswordForm