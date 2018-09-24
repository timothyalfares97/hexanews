/**
 * The ProfileForm Component for editting user in account container
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { translate } from 'react-i18next'
import { Typography } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import * as React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'

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
  isEditingUser: boolean,
  user: User,
} & StateProps

/**
 * All state required by the components
 */
export interface ComponentState {
  description: string
  email: string
  isSnackbarOpen: boolean
  name: string
}

export class ProfileForm extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Profile form and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      description: user.description ? user.description : '',
      email: user.email,
      isSnackbarOpen: false,
      name: user.name,
    }
  }

  /**
   * Function that handle onChange text in name textfield
   * @param event contain the name value from textField
   */
  handleNameChange = (event: any) => {
    this.setState({ name: event.target.value })
  }

  /**
   * Function that handle onChange text in description textfield
   * @param event contain the description value from textField
   */
  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value })
  }

  /**
   * Function that disable saveProfile button when name is empty
   */
  disableSaveProfileButton = () => {
    const { name } = this.state
    return (name === '')
  }

  /**
   * Function that call editUser action to save the user profile
   */
  onSaveProfile = async () => {
    const { dispatch } = this.props
    const { email, name, description } = this.state
    const _id = localStorage.getItem('id') || ''

    const edittedUser = { _id, email, name, description }
    await dispatch(actions.editUser(edittedUser))

    const { editUserError } = this.props

    if (editUserError === '') {
      this.setState({ isSnackbarOpen: true })
    }
  }

  /**
   * Function to close snackbar after editUser success
   */
  handleClose = () => {
    this.setState({ isSnackbarOpen: false })
  }

  /**
   * Render Profile form component
   */
  public render() {
    const { isEditingUser, editUserError } = this.props
    const { email, name, description, isSnackbarOpen } = this.state
    return (
      <div style={styles.sectionContainer}>
        <ValidatorForm
          ref='saveProFileForm'
          onSubmit={() => this.onSaveProfile()}
          instantValidate={false}
        >
          <Typography
            variant='headline'
            component='h2'
            color='textPrimary'
            gutterBottom
          >
            {i18n.t('profileForm.editProfile')}
          </Typography>
          <TextField
            id='email'
            label={i18n.t('profileForm.email')}
            value={email}
            helperText=' '
            disabled
            style={styles.textField}
            margin='dense'
          />
          <TextValidator
            label={i18n.t('profileForm.name')}
            onChange={this.handleNameChange}
            name='name'
            style={styles.textField}
            margin='dense'
            value={name}
            helperText=' '
            validators={['required', 'minStringLength:3', 'maxStringLength:50', 'matchRegexp:^[a-zA-Z\\s]+$']}
            errorMessages={[i18n.t('profileForm.enterName'),
              i18n.t('profileForm.minName'),
              i18n.t('profileForm.maxName'),
              i18n.t('profileForm.alphabeticName')]}
          />
          <TextValidator
            label={i18n.t('profileForm.description')}
            onChange={this.handleDescriptionChange}
            name='description'
            style={styles.textField}
            margin='dense'
            value={description}
            helperText=' '
            validators={['maxStringLength:100']}
            errorMessages={[i18n.t('profileForm.maxDescription')]}
          />
          <Typography
            variant='body1'
            component='h2'
            color='textPrimary'
            style={styles.errorChangeLabel}
          >
            {editUserError}
          </Typography>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            disabled={this.disableSaveProfileButton()}
            type='submit'
          >
            {isEditingUser ? <CircularProgress size={22} /> : i18n.t('profileForm.saveButton')}
          </Button>
          <SuccessSnackbar
            isSnackbarOpen={isSnackbarOpen}
            message={i18n.t('profileForm.editUserSuccess')}
            handleClose={this.handleClose}
          />
        </ValidatorForm>
      </div>
    )
  }
}

const ConnectedProfileForm = connect(selector)(ProfileForm)

export default translate('translations')(ConnectedProfileForm)