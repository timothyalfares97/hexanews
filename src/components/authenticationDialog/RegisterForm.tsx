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
import styles from './styles'
import i18n from '../../i18n'

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
            {i18n.t('registerForm.dialogTitle')}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={styles.descriptionContainer}>
              {i18n.t('registerForm.dialogDescription')}
            </DialogContentText>
            <TextValidator
              label={i18n.t('registerForm.emailAddress')}
              onChange={(event: any) => this.setState({ email: event.target.value })}
              name='registerEmail'
              style={styles.descriptionContainer}
              margin='dense'
              fullWidth
              type='email'
              value={email}
              helperText=' '
              validators={['required', 'isEmail']}
              errorMessages={[i18n.t('registerForm.enterEmail'), i18n.t('registerForm.enterValidEmail')]}
            />
            <TextValidator
              label={i18n.t('registerForm.password')}
              onChange={(event: any) => this.setState({ password: event.target.value })}
              name='registerPassword'
              margin='dense'
              fullWidth
              type='password'
              value={password}
              helperText=' '
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={[i18n.t('registerForm.enterPassword'), i18n.t('registerForm.passwordRequirement')]}
            />
            <TextValidator
              label={i18n.t('registerForm.name')}
              onChange={(event: any) => this.setState({ name: event.target.value })}
              name='registerName'
              margin='dense'
              fullWidth
              type='name'
              value={name}
              helperText=' '
              validators={['required', 'minStringLength:3', 'maxStringLength:50',
                'matchRegexp:^[a-zA-Z\\s]+$']}
              errorMessages={[i18n.t('registerForm.enterName'),
              i18n.t('registerForm.minName'),
              i18n.t('registerForm.maxName'),
              i18n.t('registerForm.alphabeticName')]}
            />
            <DialogContentText style={styles.footerContainer}>
              {i18n.t('registerForm.haveAccountLabel')}
              <span
                onClick={onChangeAuthenticationState}
                style={styles.footerLink}
              >
                {i18n.t('registerForm.loginHereLabel')}
              </span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color='primary'>
              {i18n.t('registerForm.cancelButton')}
            </Button>
            <Button
              color='primary'
              disabled={this.disableSubmitButton()}
              type='submit'
            >
              {isLoadingRegister ? <CircularProgress size={22} /> : i18n.t('registerForm.submitButton')}
            </Button>
          </DialogActions>
        </ValidatorForm>
      </div>
    )
  }
}

export default RegisterForm