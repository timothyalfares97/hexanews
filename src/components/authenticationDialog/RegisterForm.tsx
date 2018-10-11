/**
 * The Register Form Component for user to register in header container
 */

import { Dispatch } from 'redux'
import { Grid, Typography } from '@material-ui/core'
import { startCase } from 'lodash'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import * as actions from './actions'
import i18n from '../../i18n'
import styles from './styles'

/**
 * All props required by the components
 */
export type Props = {
  dispatch: Dispatch<any>,
  handleCloseDialog: () => void,
  handleOpenRegisterSnackbar: () => void,
  isLoadingRegister: boolean,
  onChangeAuthenticationState: () => void,
  registerError: string,
}

/**
 * All state required by the components
 */
export interface ComponentState {
  email: string
  password: string
  name: string
}

class RegisterForm extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for register form and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }

  /**
   * Function to disable submit button if email or password or name are empty
   */
  disableSubmitButton() {
    const { email, password, name } = this.state
    return (email === '' || password === '' || name === '')
  }

  /**
   * Function that call register action and open success snackbar if success
   */
  onRegister = async () => {
    const { email, password, name } = this.state
    const { dispatch, onChangeAuthenticationState, handleOpenRegisterSnackbar } = this.props

    const capitalizedName = startCase(name)
    await dispatch(actions.registerUser(email, password, capitalizedName))

    const { registerError } = this.props

    this.setState({ email: '', password: '', name: '' })

    if (registerError === '') {
      onChangeAuthenticationState()
      handleOpenRegisterSnackbar()
    }
  }

  /**
   * Function that render register content
   */
  renderRegisterContent = () => {
    const { onChangeAuthenticationState, registerError } = this.props
    const { email, password, name } = this.state
    return (
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
        <Typography style={styles.errorLoginLabel}>
          {registerError}
        </Typography>
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
    )
  }

  /**
   * Render Login form component
   */
  public render() {
    const { handleCloseDialog, isLoadingRegister } = this.props
    return (
      <Grid>
        <ValidatorForm
          ref='registerForm'
          onSubmit={() => this.onRegister()}
          instantValidate={false}
        >
          <DialogTitle>
            {i18n.t('registerForm.dialogTitle')}
          </DialogTitle>
          {this.renderRegisterContent()}
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
      </Grid>
    )
  }
}

export default RegisterForm