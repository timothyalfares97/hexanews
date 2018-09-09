/**
 * Display profile form component for user to edit their profile
 */

import * as React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
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
} & StateProps

interface ComponentState {
  email: string,
  name: string,
  description: string,
}

class ProfileForm extends React.Component<Props, ComponentState> {

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

  disableSaveProfileButton() {
    const { name } = this.state
    return (name === '')
  }

  onSaveProfile = async () => {
    const { dispatch } = this.props
    const { email, name, description } = this.state
    const _id = localStorage.getItem('id') || ''
    const createdAt = localStorage.getItem('createdAt') || ''

    const edittedUser = { _id, email, name, description, createdAt }
    await dispatch(actions.editUser(edittedUser))
  }

  public render() {
    const { isEditingUser } = this.props
    const { email, name, description } = this.state
    return (
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
          instantValidate={false}
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
            disabled={this.disableSaveProfileButton()}
            type='submit'
          >
            {isEditingUser ? <CircularProgress size={22} /> : accountString.saveButton}
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default connect(selector)(ProfileForm)