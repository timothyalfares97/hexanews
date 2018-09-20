/**
 * Display Profile Form component for user to edit their profile
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Typography } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import { translate } from 'react-i18next'

import * as actions from './actions'
import { User } from '../../domain/model/User'
import selector, { StateProps } from './selector'
import styles from './styles'
import i18n from '../../i18n'

export type Props = {
  user: User,
  dispatch: Dispatch<any>,
  isEditingUser: boolean,
} & StateProps

export interface ComponentState {
  email: string,
  name: string,
  description: string,
}

export class ProfileForm extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    const { user } = this.props
    this.state = {
      email: user.email,
      name: user.name,
      description: user.description ? user.description : '',
    }
  }

  handleNameChange = (event: any) => {
    this.setState({ name: event.target.value })
  }

  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value })
  }

  disableSaveProfileButton = () => {
    const { name } = this.state
    return (name === '')
  }

  onSaveProfile = async () => {
    const { dispatch } = this.props
    const { email, name, description } = this.state
    const _id = localStorage.getItem('id') || ''

    const edittedUser = { _id, email, name, description }
    await dispatch(actions.editUser(edittedUser))
  }

  public render() {
    const { isEditingUser } = this.props
    const { email, name, description } = this.state
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
            validators={['required', 'minStringLength:3', 'maxStringLength:50',
              'matchRegexp:^[a-zA-Z\\s]+$']}
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
        </ValidatorForm>
      </div>
    )
  }
}

const ConnectedProfileForm = connect(selector)(ProfileForm)

export default translate('translations')(ConnectedProfileForm)