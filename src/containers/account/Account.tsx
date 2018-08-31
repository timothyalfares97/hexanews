/**
 * Account page container for user to edit their profile
 */

import * as React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { History } from 'history'

import styles from './styles'
import { accountString } from '../../constants/string'

type Props = {
  email: string,
  history: History,
}

interface ComponentState {
  name: string,
  description: string,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
}

class Account extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      name: 'Hillary Clinton',
      description: 'A politician, writer and philanthropist.',
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

  public render() {
    const { history } = this.props
    const { name, description, currentPassword, newPassword } = this.state
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
            value={'HillaryClinton@gmail.com'}
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
            onClick={() => history.push('/profile')}
          >
            {accountString.saveButton}
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
            value={newPassword}
            onChange={this.handleNewPasswordChange}
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
            onClick={() => history.push('/profile')}
          >
            {accountString.changePassword}
          </Button>
        </div>
      </div>
    )
  }
}

export default Account