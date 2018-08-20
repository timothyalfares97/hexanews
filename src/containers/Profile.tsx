import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import { History } from 'history'

import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import ProfileCard from '../components/ProfileCard'
import Typography from '@material-ui/core/Typography'

import avatarPlaceholder from '../assets/avatar_placeholder.png'

type Props = {
  history: History
}

const styles = {
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  container: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '4%',
    paddingBottom: '5%'
  },
  profileContainer: {
    display: 'flex',
    marginBottom: '3%',
  },
  card: {
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
    marginTop: 36,
  }
}

class Profile extends React.Component<Props> {

  public render() {
    return (
      <div style={styles.container}>
        <ProfileCard
          name='Hillary Clinton'
          description='A politician, writer and philanthropist.'
          image={avatarPlaceholder}
        />
        <Divider style={{ marginTop: 20 }} />
        <Grid container spacing={24}>
          <Grid item xs={12} style={{ marginRight: 24 }}>
            <Card style={styles.card}>
              <CardHeader
                avatar={<Avatar style={styles.avatar}>HC</Avatar>}
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
                avatar={<Avatar style={styles.avatar}>HC</Avatar>}
                title='Hillary Clinton'
                subheader='11 July 2018'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  {'One Book at The Time —A Short Story'}
                </Typography>
                <Typography component='p'>
                  {'There had been times she had almost given up. All the lying, the sneaking around. But today she once more managed to continue'}
                </Typography>
              </CardContent>
            </Card>
            <Card style={styles.card}>
              <CardHeader
                avatar={<Avatar style={styles.avatar}>HC</Avatar>}
                title='Hillary Clinton'
                subheader='8 June 2018'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
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
