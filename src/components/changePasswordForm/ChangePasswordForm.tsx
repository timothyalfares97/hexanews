/**
 * The ChangePassword Component for change password user in account container
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { translate } from 'react-i18next'
import { Typography, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { User } from '../../domain/model/User'
import * as actions from './actions'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../successSnackbar/SuccessSnackbar'

/**
 * All props required by the components
 */
export type Props = {
  dispatch: Dispatch<any>,
  isChangingPassword: boolean,
  user: User,
} & StateProps

/**
 * All state required by the components
 */
export interface ComponentState {
  confirmNewPassword: string
  currentPassword: string
  email: string
  isSnackbarOpen: boolean
  newPassword: string
}

export class ChangePasswordForm extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Change Password form and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      confirmNewPassword: '',
      currentPassword: '',
      email: user.email,
      isSnackbarOpen: false,
      newPassword: '',
    }
  }

  /**
   * Component lifecycle that invoked when the component has rendered
   * Used for adding a customer validation rule to the component
   */
  componentDidMount() {
    // Custom rule validation to confirm new password matches
    ValidatorForm.addValidationRule('isNewPasswordMatch', (value: any) => {
      if (value !== this.state.newPassword) {
        return false
      }
      return true
    })
  }

  /**
   * Function that handle onChange text in currentPassword textfield
   * @param event contain the current password value from textField
   */
  handleCurrentPasswordChange = (event: any) => {
    this.setState({ currentPassword: event.target.value })
  }

  /**
   * Function that handle onChange text in newPassword textfield
   * @param event contain the newPassword value from textField
   */
  handleNewPasswordChange = (event: any) => {
    this.setState({ newPassword: event.target.value })
  }

  /**
   * Function that handle onChange text in confirmNewPassword textfield
   * @param event contain the confirmNewPassword value from textField
   */
  handleConfirmNewPasswordChange = (event: any) => {
    this.setState({ confirmNewPassword: event.target.value })
  }

  /**
   * Function that disable changePassword button when all password is empty
   */
  disableChangePasswordButton() {
    const { currentPassword, newPassword, confirmNewPassword } = this.state
    return (currentPassword === '' || newPassword === '' || confirmNewPassword === '')
  }

  /**
   * Function that call changePassword action to change the user password
   */
  onChangePassword = async () => {
    const { dispatch } = this.props
    const { email, currentPassword, newPassword } = this.state

    await dispatch(actions.changePassword(email, currentPassword, newPassword))

    this.setState({ currentPassword: '', newPassword: '', confirmNewPassword: '' })

    const { changePasswordError } = this.props

    if (changePasswordError === '') {
      this.setState({ isSnackbarOpen: true })
    }
  }

  /**
   * Function to close snackbar after change password success
   */
  handleClose = () => {
    this.setState({ isSnackbarOpen: false })
  }

  /**
   * Render Change Password form component
   */
  public render() {
    const { isChangingPassword, changePasswordError } = this.props
    const { currentPassword, newPassword, confirmNewPassword, isSnackbarOpen } = this.state
    return (
      <Grid style={styles.sectionContainer}>
        <ValidatorForm
          ref='changePasswordForm'
          onSubmit={() => this.onChangePassword()}
          instantValidate={false}
        >
          <Typography
            variant='headline'
            component='h2'
            color='textPrimary'
          >
            {i18n.t('changePasswordForm.changePassword')}
          </Typography>
          <TextValidator
            label={i18n.t('changePasswordForm.currentPassword')}
            onChange={this.handleCurrentPasswordChange}
            name='currentPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={currentPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
            errorMessages={[i18n.t('changePasswordForm.enterCurrentPassword'), i18n.t('changePasswordForm.passwordRequirement')]}
          />
          <TextValidator
            label={i18n.t('changePasswordForm.newPassword')}
            onChange={this.handleNewPasswordChange}
            name='newPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={newPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
            errorMessages={[i18n.t('changePasswordForm.enterNewPassword'), i18n.t('changePasswordForm.passwordRequirement')]}
          />
          <TextValidator
            label={i18n.t('changePasswordForm.confirmNewPassword')}
            onChange={this.handleConfirmNewPasswordChange}
            name='confirmNewPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={confirmNewPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$', 'isNewPasswordMatch']}
            errorMessages={[i18n.t('changePasswordForm.enterConfirmNewPassword'),
              i18n.t('changePasswordForm.passwordRequirement'), i18n.t('changePasswordForm.isPasswordMatch')]}
          />
          <Typography
            variant='body1'
            component='h2'
            color='textPrimary'
            style={styles.errorChangeLabel}
          >
            {changePasswordError}
          </Typography>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            disabled={this.disableChangePasswordButton()}
            type='submit'
          >
            {isChangingPassword ? <CircularProgress size={22} /> : i18n.t('changePasswordForm.changePassword')}
          </Button>
          <SuccessSnackbar
            isSnackbarOpen={isSnackbarOpen}
            message={i18n.t('profileForm.changePasswordSuccess')}
            handleClose={this.handleClose}
          />
        </ValidatorForm>
      </Grid>
    )
  }
}

const ConnectedChangePassword = connect(selector)(ChangePasswordForm)

export default translate('translations')(ConnectedChangePassword)