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
  onChangeAuthenticationState: () => void
}

interface ComponentState {
  email: string
  password: string
  name: string
}

class RegisterForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState } = this.props
    return (
      <div>
        <DialogTitle>
          {'Register'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {`Register to access your personalized homepage. Please enter your email address and password.`}
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
          <TextField
            margin='dense'
            id='name'
            label='full name'
            fullWidth
          />
          <DialogContentText style={styles.footerContainer}>
            {'Have an account? '}
            <span
              onClick={onChangeAuthenticationState}
              style={styles.footerLink}
            >
              {'Login here'}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            {'Cancel'}
          </Button>
          <Button onClick={handleCloseDialog} color='primary'>
            {'Register'}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default RegisterForm