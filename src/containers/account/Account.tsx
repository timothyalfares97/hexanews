/**
 * Account page container for user to edit their profile
 */

import * as React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Dispatch } from 'redux'

import * as actions from './actions'
import styles from './styles'
import { User } from '../../domain/model/User'
import { accountString } from '../../constants/string'
import selector, { StateProps } from './selector'

type Props = {
  user: User,
  dispatch: Dispatch<any>,
  isEditingUser: boolean,
  isChangingPassword: boolean,
} & StateProps

interface ComponentState {
  email: string,
  name: string,
  description: string,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string,
  submitted: boolean,
}

class Account extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      email: user.email,
      name: user.name,
      description: user.description ? user.description : '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      submitted: false,
    }
  }

  componentWillMount() {
    const { newPassword } = this.state
    ValidatorForm.addValidationRule('isNewPasswordMatch', (value: any) => {
      if (value !== newPassword) {
        return false
      }
      return true
    })
  }

  handleNameChange = (event: any) => {
    this.setState({ name: event.target.value })
  }

  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value })
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

  onSaveProfile = async () => {
    const { dispatch } = this.props
    const { email, name, description } = this.state
    const _id = localStorage.getItem('id') || ''
    const createdAt = localStorage.getItem('createdAt') || ''

    this.setState({ submitted: true })
    const edittedUser = { _id, email, name, description, createdAt }
    await dispatch(actions.editUser(edittedUser))
  }

  onChangePassword = async () => {
    const { dispatch } = this.props
    const { email, currentPassword, newPassword } = this.state

    await dispatch(actions.changePassword(email, currentPassword, newPassword))
  }

  public render() {
    const { isEditingUser, isChangingPassword } = this.props
    const { email, name, description, currentPassword, newPassword, confirmNewPassword } = this.state
    return (
      <div style={styles.container}>
        <Typography
          variant='display1'
          component='h1'
          color='textPrimary'
          gutterBottom
        >
          {accountString.myAccount}
        </Typography>
        <div style={styles.sectionContainer}>
          <Typography
            variant='headline'
            component='h2'
            color='textPrimary'
            gutterBottom
          >
            {accountString.editProfile}
          </Typography>
          <ValidatorForm
            ref='saveProFileForm'
            onSubmit={() => this.onSaveProfile()}
          >
            <TextField
              id='email'
              label='Email'
              value={email}
              disabled
              style={styles.textField}
              margin='normal'
            />
            <TextValidator
              label='Name'
              onChange={this.handleNameChange}
              name='name'
              style={styles.textField}
              margin='normal'
              value={name}
              validators={['required', 'minStringLength:3', 'maxStringLength:50',
                'matchRegexp:^[a-zA-Z\\s]+$']}
              errorMessages={['Please enter name',
                'Name field requires a minimum of 3 characters',
                'Name field requires a maximum of 50 characters',
                'Name can only contain alphabetical characters']}
            />
            <TextValidator
              label='Description'
              onChange={this.handleDescriptionChange}
              name='description'
              style={styles.textField}
              margin='normal'
              value={description}
              validators={['maxStringLength:100']}
              errorMessages={['Description field requires a maximum of 100 characters']}
            />
            <Button
              variant='outlined'
              size='small'
              component='button'
              style={styles.button}
              type='submit'
            >
              {isEditingUser ? <CircularProgress size={22} /> : accountString.saveButton}
            </Button>
          </ValidatorForm>
        </div>
        <Divider style={styles.sectionDivider} />
        <div style={styles.sectionContainer}>
          <ValidatorForm
            ref='changePasswordForm'
            onSubmit={() => this.onChangePassword()}
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
              margin='normal'
              type='password'
              value={currentPassword}
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={['Please enter current password',
                'Password length must be between 6-20 characters and contains no special character']}
            />
            <TextValidator
              label='New Password'
              onChange={this.handleNewPasswordChange}
              name='newPassword'
              style={styles.textField}
              margin='normal'
              type='password'
              value={newPassword}
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$']}
              errorMessages={['Please enter new password',
                'Password length must be between 6-20 characters and contains no special character']}
            />
            <TextValidator
              label='Confirm New Password'
              onChange={this.handleConfirmNewPasswordChange}
              name='confirmNewPassword'
              style={styles.textField}
              margin='normal'
              type='password'
              value={confirmNewPassword}
              validators={['required', 'matchRegexp:^[a-zA-Z0-9]{6,20}$',
                'isNewPasswordMatch']}
              errorMessages={['Please confirm new password',
                'Password length must be between 6-20 characters and contains no special character',
                'Confirm new password must match new password']}
            />
            <Button
              variant='outlined'
              size='small'
              component='button'
              style={styles.button}
              type='submit'
            >
              {isChangingPassword ? <CircularProgress size={22} /> : accountString.changePassword}
            </Button>
          </ValidatorForm>
        </div>
      </div>
    )
  }
}

export default connect(selector)(Account)