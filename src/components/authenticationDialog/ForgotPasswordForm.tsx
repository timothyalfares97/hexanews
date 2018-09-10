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

import { forgetPasswordFormString } from '../../constants/string'
import styles from './styles'

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
            {forgetPasswordFormString.dialogTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={styles.descriptionContainer}>
              {forgetPasswordFormString.dialogDescription}
            </DialogContentText>
            <TextValidator
              label='Email Address'
              onChange={(event: any) => this.setState({ email: event.target.value })}
              name='forgotPasswordEmail'
              style={styles.descriptionContainer}
              margin='dense'
              fullWidth
              type='email'
              value={email}
              helperText=' '
              validators={['required', 'isEmail']}
              errorMessages={['Please enter email', 'Please enter a valid email']}
            />
            <DialogContentText style={styles.footerContainer}>
              <span
                onClick={onChangeAuthenticationState}
                style={styles.footerLink}
              >
                {forgetPasswordFormString.backLogin}
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              {forgetPasswordFormString.cancelButton}
            </Button>
            <Button
              onClick={this.onForgotPassword}
              color='primary'
              disabled={this.disableSubmitButton()}
              type='submit'
            >
              {forgetPasswordFormString.submitButton}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default ForgotPasswordForm