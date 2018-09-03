/**
 * Display forgot password form component.
 */
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import { forgetPasswordFormString } from '../../constants/string'
import styles from './styles'

type Props = {
  handleCloseDialog: () => void
  onChangeAuthenticationState: () => void
}

interface ComponentState {
  email: string
  emailError: string
}

class ForgotPasswordForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      emailError: ''
    }
  }

  validateEmailTextField = () => {
    const { email } = this.state

    let errorMessage = ''

    if (email === '') {
      errorMessage = 'Please enter your email address'
    }

    // tslint:disable:max-line-length
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email.toLowerCase())) {
      errorMessage = 'Invalid email address. Valid e-mail can contain only latin letters, numbers, "@" and "."'
    }

    this.setState({ emailError: errorMessage })
  }

  onForgotPassword = async () => {
    await this.validateEmailTextField()
  }

  public render() {
    const { emailError } = this.state
    const { handleCloseDialog, onChangeAuthenticationState } = this.props
    const isEmailErrorEmpty = emailError !== ''
    return (
      <div>
        <DialogTitle>
          {forgetPasswordFormString.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {forgetPasswordFormString.dialogDescription}
          </DialogContentText>
          <TextField
            error={isEmailErrorEmpty}
            margin='dense'
            id='forgotPasswordEmail'
            helperText={isEmailErrorEmpty ? emailError : ''}
            onChange={(event: any) => this.setState({ email: event.target.value })}
            label='Email Address'
            type='email'
            fullWidth
            style={styles.descriptionContainer}
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
          <Button onClick={this.onForgotPassword} color='primary'>
            {forgetPasswordFormString.submitButton}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default ForgotPasswordForm