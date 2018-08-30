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
}

class ForgotPasswordForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState } = this.props
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
            margin='dense'
            id='forgotPasswordEmail'
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
          <Button onClick={handleCloseDialog} color='primary'>
            {forgetPasswordFormString.submitButton}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default ForgotPasswordForm