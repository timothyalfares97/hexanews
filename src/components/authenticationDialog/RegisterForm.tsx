/**
 * Display register form component.
 */
import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import { Dispatch } from 'redux'

import * as actions from './actions'
import styles from './styles'
import { registerFormString } from '../../constants/string'

type Props = {
  dispatch: Dispatch<any>
  isLoadingRegister: boolean,
  handleCloseDialog: () => void
  onChangeAuthenticationState: () => void
}

interface ComponentState {
  email: string
  password: string
  name: string
  description: string
}

class RegisterForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      description: '',
    }
  }

  onRegister = async () => {
    const { email, password, name, description } = this.state
    const { dispatch, onChangeAuthenticationState } = this.props

    await dispatch(actions.registerUser(email, password, name, description))
    onChangeAuthenticationState()
  }

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState, isLoadingRegister } = this.props
    const { email, password, name } = this.state
    return (
      <div>
        <DialogTitle>
          {registerFormString.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={styles.descriptionContainer}>
            {registerFormString.dialogDescription}
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
            {registerFormString.haveAccountLabel}
            <span
              onClick={onChangeAuthenticationState}
              style={styles.footerLink}
            >
              {registerFormString.loginHereLabel}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            {registerFormString.cancelButton}
          </Button>
          <Button onClick={this.onRegister} color='primary'>
            {isLoadingRegister ? <CircularProgress size={22} /> : registerFormString.submitButton}
          </Button>
        </DialogActions>
      </div>
    )
  }
}

export default RegisterForm