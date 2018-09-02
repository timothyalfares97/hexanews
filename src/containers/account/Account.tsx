/**
 * Account page container for user to edit their profile
 */

import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

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
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
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
      confirmNewPassword: ''
    }
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

    const edittedUser = { _id, email, name, description, createdAt }
    await dispatch(actions.editUser(edittedUser))
  }

  public render() {
    const { dispatch, isEditingUser } = this.props
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
          <TextField
            id='email'
            label='Email'
            value={email}
            disabled
            style={styles.textField}
            margin='normal'
          />
          <TextField
            id='name'
            label='Name'
            value={name}
            onChange={this.handleNameChange}
            style={styles.textField}
            margin='normal'
          />
          <TextField
            id='description'
            label='Description'
            value={description}
            onChange={this.handleDescriptionChange}
            style={styles.textField}
            margin='normal'
          />
        </div>
        <div>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            onClick={this.onSaveProfile}
          >
            {isEditingUser ? <CircularProgress size={22} /> : accountString.saveButton}
          </Button>
        </div>
        <Divider style={styles.sectionDivider} />
        <div style={styles.sectionContainer}>
          <Typography
            variant='headline'
            component='h2'
            color='textPrimary'
          >
            {accountString.changePassword}
          </Typography>
          <TextField
            id='currentPassword'
            label='Current Password'
            value={currentPassword}
            onChange={this.handleCurrentPasswordChange}
            style={styles.textField}
            margin='normal'
          />
          <TextField
            id='newPassword'
            label='New Password'
            value={newPassword}
            onChange={this.handleNewPasswordChange}
            style={styles.textField}
            margin='normal'
          />
          <TextField
            id='confirmNewPassword'
            label='Confirm New Password'
            value={confirmNewPassword}
            onChange={this.handleConfirmNewPasswordChange}
            style={styles.textField}
            margin='normal'
          />
        </div>
        <div>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            onClick={() => dispatch(push('/profile'))}
          >
            {accountString.changePassword}
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(selector)(Account)