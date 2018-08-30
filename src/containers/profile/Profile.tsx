/**
 * Profile container contains all description of current user
 */

import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import avatarPlaceholder from '../../assets/avatar_placeholder.png'
import ProfileCard from '../../components/profileCard/ProfileCard'
import styles from './styles'
import { profileString } from '../../constants/string'

type Props = {
  history: History
}

class Profile extends React.Component<Props> {

  renderAvatar = () => {
    return <Avatar style={styles.avatar}>HC</Avatar>
  }

  public render() {
    const { history } = this.props
    return (
      <div style={styles.container}>
        <ProfileCard
          name='Hillary Clinton'
          description='A politician, writer and philanthropist.'
          image={avatarPlaceholder}
        />
        <Button
          variant='outlined'
          size='small'
          component='button'
          style={styles.button}
          onClick={() => history.push('/editProfile')}
        >
          {profileString.editProfile}
        </Button>
        <Divider style={styles.profileDivider} />
        <Grid container spacing={24}>
          <Grid item xs={12} style={styles.articleContainer}>
            <Card style={styles.card}>
              <CardHeader
                avatar={this.renderAvatar()}
                title='Hillary Clinton'
                subheader='20 August 2018'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  {'Implement Google Analytics for React Native'}
                </Typography>
                <Typography component='p'>
                  {'For almost every product that is built or launched in the market, the business and development teams testing there'}
                </Typography>
              </CardContent>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                avatar={this.renderAvatar()}
                title='Hillary Clinton'
                subheader='11 July 2018'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  {'One Book at The Time —A Short Story'}
                </Typography>
                <Typography component='p'>
                  {'There had been times she had almost given up. All the lying, the sneaking around. But today she once more managed to continue'}
                </Typography>
              </CardContent>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                avatar={this.renderAvatar()}
                title='Hillary Clinton'
                subheader='8 June 2018'
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant='headline'
                  component='h2'
                >
                  {'Adjustable sidebar using Angular'}
                </Typography>
                <Typography component='p'>
                  {'Also for this tutorial I din’t put accent on CSS, I assume that you already created a sidebar which you need to make draggable.'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default Profile
