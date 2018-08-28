import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import styles from './styles'

type Props = {
  handleCloseDialog: () => void
  onChangeForgotPassword: () => void
  onChangeAuthenticationState: () => void
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

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState, onChangeForgotPassword } = this.props
    return (
      <div>
        <DialogTitle>
          {'Sign In'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {`login to access your personalized homepage. Please enter your email address and password.`}
          </DialogContentText>
          <TextField
            margin='dense'
            id='loginEmail'
            label='Email Address'
            type='email'
            fullWidth
            style={styles.descriptionContainer}
          />
          <TextField
            margin='dense'
            id='loginPassword'
            label='Password'
            type='password'
            fullWidth
          />
          <DialogContentText style={styles.forgotPasswordContainer}>
            <span
              onClick={onChangeForgotPassword}
              style={styles.footerLink}
            >
              {'Forgot Password? '}
            </span>
          </DialogContentText>
          <DialogContentText style={styles.footerContainer}>
            {'Have no account? '}
            <span
              onClick={onChangeAuthenticationState}
              style={styles.footerLink}
            >
              {'Register here'}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            {'Cancel'}
          </Button>
          <Button onClick={handleCloseDialog} color='primary'>
            {'Sign In'}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default LoginForm