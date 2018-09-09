/**
 * Account page container for user to edit their profile
 */

import * as React from 'react'
import { connect } from 'react-redux'
import Divider from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core'
import { Dispatch } from 'redux'

import ProfileForm from '../../components/profileForm/ProfileForm'
import ChangePasswordForm from '../../components/changePasswordForm/ChangePasswordForm'
import styles from './styles'
import { User } from '../../domain/model/User'
import { accountString } from '../../constants/string'
import selector, { StateProps } from './selector'

type Props = {
  user: User,
  dispatch: Dispatch<any>,
} & StateProps

class Account extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    }
  }

  public render() {
    const { user, dispatch, isEditingUser, isChangingPassword } = this.props
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
        <ProfileForm
          user={user}
          dispatch={dispatch}
          isEditingUser={isEditingUser}
        />
        <Divider style={styles.sectionDivider} />
        <ChangePasswordForm
          user={user}
          dispatch={dispatch}
          isChangingPassword={isChangingPassword}
        />
      </div>
    )
  }
}

export default connect(selector)(Account)