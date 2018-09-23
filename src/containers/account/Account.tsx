/**
 * Display account page container for user to edit their profile
 */

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import { translate } from 'react-i18next'
import Divider from '@material-ui/core/Divider'

import ChangePasswordForm from '../../components/changePasswordForm/ChangePasswordForm'
import ProfileForm from '../../components/profileForm/ProfileForm'
import styles from './styles'
import i18n from '../../i18n'

/**
 * All props required by the container
 */
type Props = {
}

export class Account extends React.Component<Props> {

  /**
   * Render the account page container
   */
  public render() {
    return (
      <Grid container style={styles.container}>
        <Grid item md={3} xs={1}/>
        <Grid item md={6} xs={10}>
          <Typography
            variant='display1'
            component='h1'
            color='textPrimary'
            gutterBottom
          >
            {i18n.t('account.myAccount')}
          </Typography>
          <ProfileForm />
          <Divider style={styles.sectionDivider} />
          <ChangePasswordForm />
        </Grid>
        <Grid item md={3} xs={1}/>
      </Grid>
    )
  }
}

const ConnectedAccount = connect()(Account)

export default translate('translations')(ConnectedAccount)