/**
 * Display profile container thath contains all the description of current user
 */

import { CardMedia } from '@material-ui/core'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { map, startCase, head, isEmpty } from 'lodash'
import { push } from 'connected-react-router'
import { translate } from 'react-i18next'
import * as moment from 'moment'
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { Article } from '../../domain/model/Article'
import { DATE_FORMAT, HEADER_LINK } from '../../constants/config'
import { User } from '../../domain/model/User'
import avatarPlaceholder from '../../assets/avatar_placeholder.png'
import i18n from '../../i18n'
import placeholder from '../../assets/placeholder.png'
import ProfileCard from '../../components/profileCard/ProfileCard'
import selector, { StateProps } from './selector'
import styles from './styles'
import Utils from '../../utils'

/**
 * All props required by the container
 */
type Props = {
  user: User,
  dispatch: Dispatch<any>
} & StateProps

export class Profile extends React.Component<Props> {

  /**
   * Function that render an avatar of the author's initals
   * @param authorName the name of the author
   */
  renderAvatar = (authorName: string) => {
    const initials = head(startCase(authorName))
    return <Avatar style={styles.avatar}>{initials}</Avatar>
  }

  /**
   * Function that render all the user articles
   */
  renderUserArticles = () => {
    const { userArticles, dispatch, user } = this.props

    if (isEmpty(userArticles)) {
      return (
        <Grid style={styles.emptyArticle}>
          <Typography variant='subheading'>
            {i18n.t('profile.noArticle')}
          </Typography>
        </Grid>
      )
    }

    return map(userArticles, (article: Article) => {
      const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
      const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
      const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
      const articleId = article._id ? article._id : ''
      return (
        <Card
          style={styles.card}
          key={article._id}
          onClick={() => dispatch(push(HEADER_LINK.articleDetail(articleId)))}
          id={`card-${article._id}`}
        >
          <CardHeader
            avatar={this.renderAvatar(user.name)}
            title={user.name}
            subheader={moment(article.createdAt).format(DATE_FORMAT)}
          />
          <CardMedia
            style={styles.media}
            image={articleImage}
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

  /**
   * Render Profile container
   */
  public render() {
    const { dispatch, user } = this.props
    return (
      <Grid container style={styles.container as any}>
        <Grid container>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10} style={styles.profileCard as any}>
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
              {i18n.t('profile.myAccount')}
            </Button>
            <Divider style={styles.profileDivider} />
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container spacing={24}>
          <Grid item md={3} xs={1}/>
          <Grid item md={6} xs={10} style={styles.articleContainer}>
            {this.renderUserArticles()}
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
      </Grid >
    )
  }
}

const ConnectedProfile = connect(selector)(Profile)

export default translate('translations')(ConnectedProfile)
