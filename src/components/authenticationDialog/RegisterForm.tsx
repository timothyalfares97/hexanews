/**
 * Display register form component.
 */

import * as React from 'react'
import { Dispatch } from 'redux'
import { startCase } from 'lodash'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import * as actions from './actions'
import { registerFormString } from '../../constants/string'
import styles from './styles'

export type Props = {
  dispatch: Dispatch<any>
  isLoadingRegister: boolean,
  handleCloseDialog: () => void
  onChangeAuthenticationState: () => void
}

export interface ComponentState {
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

  disableSubmitButton() {
    const { email, password, name } = this.state
    return (email === '' || password === '' || name === '')
  }

  onRegister = async () => {
    const { email, password, name } = this.state
    const { dispatch, onChangeAuthenticationState } = this.props

    const capitalizedName = startCase(name)
    await dispatch(actions.registerUser(email, password, capitalizedName, onChangeAuthenticationState))
  }

  public render() {
    const { handleCloseDialog, onChangeAuthenticationState, isLoadingRegister } = this.props
    const { email, password, name } = this.state
    return (
      <div>
        <ValidatorForm
          ref='registerForm'
          onSubmit={() => this.onRegister()}
          instantValidate={false}
        >
          <DialogTitle>
            {registerFormString.dialogTitle}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={styles.descriptionContainer}>
              {registerFormString.dialogDescription}
            </DialogContentText>
            <TextValidator
              label='Email Address'
              onChange={(event: any) => this.setState({ email: event.target.value })}
              name='registerEmail'
              style={styles.descriptionContainer}
              margin='dense'
              fullWidth
              type='email'
              value={email}
              helperText=' '
              validators={['required', 'isEmail']}
              errorMessages={['Please enter email', 'Please enter a valid email']}
            />
            <TextValidator
              label='Password'
              onChange={(event: any) => this.setState({ password: event.target.value })}
              name='registerPassword'
              margin='dense'
              fullWidth
              type='password'
              value={password}
              helperText=' '
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={['Please enter password',
                'Password length must be between 6-20 characters and contains no special character']}
            />
            <TextValidator
              label='Name'
              onChange={(event: any) => this.setState({ name: event.target.value })}
              name='registerName'
              margin='dense'
              fullWidth
              type='name'
              value={name}
              helperText=' '
              validators={['required', 'minStringLength:3', 'maxStringLength:50',
                'matchRegexp:^[a-zA-Z\\s]+$']}
              errorMessages={['Please enter name',
                'Name field requires a minimum of 3 characters',
                'Name field requires a maximum of 50 characters',
                'Name can only contain alphabetical characters']}
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
            <Button
              color='primary'
              disabled={this.disableSubmitButton()}
              type='submit'
            >
              {isLoadingRegister ? <CircularProgress size={22} /> : registerFormString.submitButton}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default RegisterForm