import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import styles from './styles'

type Props = {
  showDialog: boolean
  handleCloseDialog: () => void
}

interface ComponentState {
  email: string
  password: string
  authenticationForm: string
}

class AuthenticationDialog extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authenticationForm: 'login'
    }
  }

  onChangeAuthenticationState = (value: string) => {
    this.setState({ authenticationForm: value })
  }

  renderFooterDialog = () => {
    const { authenticationForm } = this.state
    const authenticationTitle = authenticationForm === 'login' ? 'Register' : 'Sign in'
    const authenticationState = authenticationForm === 'login' ? 'register' : 'login'
    const authenticationContent = authenticationForm === 'login' ? 'Have no account? ' : 'Have account? '
    return (
      <DialogContentText style={styles.footerContainer}>
        {authenticationContent}
        <span
          onClick={() => this.onChangeAuthenticationState(authenticationState)}
          style={styles.footerLink}
        >
          {authenticationTitle} here
        </span>
      </DialogContentText>
    )
  }

  public render() {
    const { showDialog, handleCloseDialog } = this.props
    const { authenticationForm } = this.state
    const authenticationTitle = authenticationForm === 'login' ? 'Sign in' : 'Register'
    return (
      <Dialog open={showDialog}>
        <DialogTitle>
          {authenticationTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {`${authenticationTitle } to access your personalized homepage. Please enter your email address and password.`}
          </DialogContentText>
          <TextField
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            style={styles.descriptionContainer}
          />
          <TextField
            margin='dense'
            id='password'
            label='Password'
            type='password'
            fullWidth
          />
          {this.renderFooterDialog()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleCloseDialog} color='primary'>
            {authenticationTitle}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default AuthenticationDialog