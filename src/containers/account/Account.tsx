/**
 * Account page container for user to edit their profile
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

import { accountString } from '../../constants/string'
import ChangePasswordForm from '../../components/changePasswordForm/ChangePasswordForm'
import ProfileForm from '../../components/profileForm/ProfileForm'
import styles from './styles'

type Props = {
}

class Account extends React.Component<Props> {
  public render() {
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
        <ProfileForm />
        <Divider style={styles.sectionDivider} />
        <ChangePasswordForm />
      </div>
    )
  }
}

export default connect()(Account)