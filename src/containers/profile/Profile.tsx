/**
 * Profile container contains all description of current user
 */

import * as React from 'react'
import * as moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { map, startCase, head } from 'lodash'

import avatarPlaceholder from '../../assets/avatar_placeholder.png'
import ProfileCard from '../../components/profileCard/ProfileCard'
import styles from './styles'
import { profileString } from '../../constants/string'
import selector, { StateProps } from './selector'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

type Props = {
  user: User,
  dispatch: Dispatch<any>
} & StateProps

export class Profile extends React.Component<Props> {

  renderAvatar = (authorName: string) => {
    const initials = head(startCase(authorName))
    return <Avatar style={styles.avatar}>{initials}</Avatar>
  }

  renderUserArticles = () => {
    const { userArticles, dispatch, user } = this.props
    return map(userArticles, (article: Article) => {
      const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
      const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
      return (
        <Card
          style={styles.card}
          key={article._id}
          onClick={() => dispatch(push(`/articleDetail/${article._id}`))}
          id={`card-${article._id}`}
        >
          <CardHeader
            avatar={this.renderAvatar(user.name)}
            title={user.name}
            subheader={moment(article.createdAt).format('D MMMM YYYY')}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {article.title}
            </Typography>
            <Typography component='p'>
              {articleDescription}
            </Typography>
          </CardContent>
        </Card>
      )
    })
  }

  public render() {
    const { dispatch, user } = this.props
    return (
      <div style={styles.container}>
        <ProfileCard
          name={user.name}
          description={user.description ? user.description : ''}
          image={avatarPlaceholder}
          createdAt={user.createdAt ? user.createdAt : ''}
        />
        <Button
          id='accountButton'
          variant='outlined'
          size='small'
          component='button'
          style={styles.button}
          onClick={() => dispatch(push('/account'))}
        >
          {profileString.myAccount}
        </Button>
        <Divider style={styles.profileDivider} />
        <Grid container spacing={24}>
          <Grid item xs={12} style={styles.articleContainer}>
            {this.renderUserArticles()}
          </Grid>
        </Grid>
      </div >
    )
  }
}

export default connect(selector)(Profile)
