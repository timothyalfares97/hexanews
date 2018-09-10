/**
 * Display Change Password Form component for user to change their password
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Typography } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import * as actions from './actions'
import { accountString } from '../../constants/string'
import { User } from '../../domain/model/User'
import selector, { StateProps } from './selector'
import styles from './styles'

export type Props = {
  user: User,
  dispatch: Dispatch<any>,
  isChangingPassword: boolean,
} & StateProps

export interface ComponentState {
  email: string,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string,
}

export class ChangePasswordForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      email: user.email,
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }
  }

  componentDidMount() {
    // Custom rule validation to confirm new password matches
    ValidatorForm.addValidationRule('isNewPasswordMatch', (value: any) => {
      if (value !== this.state.newPassword) {
        return false
      }
      return true
    })
  }

  handleCurrentPasswordChange = (event: any) => {
    this.setState({ currentPassword: event.target.value })
  }

  handleNewPasswordChange = (event: any) => {
    this.setState({ newPassword: event.target.value })
  }

  handleConfirmNewPasswordChange = (event: any) => {
    this.setState({ confirmNewPassword: event.target.value })
  }

  disableChangePasswordButton() {
    const { currentPassword, newPassword, confirmNewPassword } = this.state
    return (currentPassword === '' || newPassword === '' || confirmNewPassword === '')
  }

  onChangePassword = async () => {
    const { dispatch } = this.props
    const { email, currentPassword, newPassword } = this.state

    await dispatch(actions.changePassword(email, currentPassword, newPassword))
  }

  public render() {
    const { isChangingPassword } = this.props
    const { currentPassword, newPassword, confirmNewPassword } = this.state
    return (
      <div style={styles.sectionContainer}>
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
            {accountString.changePassword}
          </Typography>
          <TextValidator
            label='Current Password'
            onChange={this.handleCurrentPasswordChange}
            name='currentPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={currentPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
            errorMessages={['Please enter current password',
              'Password length must be between 6-20 characters and contains no special character']}
          />
          <TextValidator
            label='New Password'
            onChange={this.handleNewPasswordChange}
            name='newPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={newPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
            errorMessages={['Please enter new password',
              'Password length must be between 6-20 characters and contains no special character']}
          />
          <TextValidator
            label='Confirm New Password'
            onChange={this.handleConfirmNewPasswordChange}
            name='confirmNewPassword'
            style={styles.textField}
            margin='dense'
            type='password'
            value={confirmNewPassword}
            helperText=' '
            validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$', 'isNewPasswordMatch']}
            errorMessages={['Please confirm new password',
              'Password length must be between 6-20 characters and contains no special character',
              'Confirm new password must match new password']}
          />
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            disabled={this.disableChangePasswordButton()}
            type='submit'
          >
            {isChangingPassword ? <CircularProgress size={22} /> : accountString.changePassword}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default connect(selector)(ChangePasswordForm)