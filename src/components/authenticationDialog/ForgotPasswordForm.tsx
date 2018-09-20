/**
 * Display forgot password form component.
 */

import * as React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import styles from './styles'
import i18n from '../../i18n'

export type Props = {
  handleCloseDialog: () => void
  onChangeAuthenticationState: () => void
}

export interface ComponentState {
  email: string
}

class ForgotPasswordForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  disableSubmitButton() {
    const { email } = this.state
    return (email === '')
  }

  onForgotPassword = async () => {
    await null
  }

  public render() {
    const { email } = this.state
    const { handleCloseDialog, onChangeAuthenticationState } = this.props
    return (
      <div>
        <ValidatorForm
          ref='forgotPasswordForm'
          onSubmit={() => this.onForgotPassword()}
          instantValidate={false}
        >
          <DialogTitle>
            {i18n.t('forgotPasswordForm.dialogTitle')}
          </DialogTitle>
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
            <DialogContentText style={styles.footerContainer}>
              <span
                onClick={onChangeAuthenticationState}
                style={styles.footerLink}
              >
                {i18n.t('forgotPasswordForm.backLogin')}
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              {i18n.t('forgotPasswordForm.cancelButton')}
            </Button>
            <Button
              onClick={this.onForgotPassword}
              color='primary'
              disabled={this.disableSubmitButton()}
              type='submit'
            >
              {i18n.t('forgotPasswordForm.submitButton')}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default ForgotPasswordForm