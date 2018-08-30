/**
 * Display register form component.
 */
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { Dispatch } from 'redux'

import * as actions from './actions'
import styles from './styles'

type Props = {
  dispatch: Dispatch<any>
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

  onRegister = async () => {
    const { email, password, name } = this.state
    const { dispatch, handleCloseDialog } = this.props

    await dispatch(actions.registerUser(email, password, name))
    handleCloseDialog()
  }

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState } = this.props
    const { email, password, name } = this.state
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
            id='registerEmail'
            label='Email Address'
            type='email'
            onChange={(event: any) => this.setState({ email: event.target.value })}
            value={email}
            fullWidth
            style={styles.descriptionContainer}
          />
          <TextField
            margin='dense'
            id='registerPassword'
            label='Password'
            type='password'
            onChange={(event: any) => this.setState({ password: event.target.value })}
            value={password}
            fullWidth
          />
          <TextField
            margin='dense'
            id='registerName'
            label='name'
            onChange={(event: any) => this.setState({ name: event.target.value })}
            value={name}
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
          <Button onClick={this.onRegister} color='primary'>
            {'Register'}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default RegisterForm