/**
 * Display Article Detail screen containing the article description
 */

import * as React from 'react'
import ReactHtmlParser from 'react-html-parser'
import * as moment from 'moment'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { map, find, head, startCase } from 'lodash'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'
import styles from './styles'
import { User } from '../../domain/model/User'
import FooterCard from '../../components/footerCard/FooterCard'
import selector, { StateProps } from './selector'
import { NotFound } from '../notFound/NotFound'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

export class ArticleDetail extends React.Component<Props> {

  renderArticle = () => {
    const { users, userArticle, isUserArticle, isDeletingArticle } = this.props
    if (!!userArticle) {
      const authorId = userArticle.authorId
      const author = find(users, (user: User) => user._id === authorId)
      const authorName = author ? author.name : 'Author Deleted'
      const initials = head(startCase(authorName))
      return (
        <div style={styles.contentContainer}>
          <div style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              {initials}
            </Avatar>
            <div style={styles.detailContainer as any}>
              <Typography
                variant='subheading'
                style={styles.profileName}
              >
                {authorName}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
              >
                {moment(userArticle.createdAt).format('D MMMM YYYY')}
              </Typography>
            </div>
            <div style={styles.buttonContainer}>
              {isUserArticle &&
                <Button
                  variant='outlined'
                  size='small'
                  component='button'
                  style={{ alignSelf: 'center' }}
                  onClick={this.onDeleteArticle}
                >
                  {isDeletingArticle ? <CircularProgress size={22} /> : 'Delete article'}
                </Button>
              }
            </div>
          </div>
          <Typography
            variant='display1'
            component='h1'
            gutterBottom
          >
            {userArticle.title}
          </Typography>
          {ReactHtmlParser(userArticle.description)}
        </div>
      )
    }
    return
  }

  renderFooterCards = () => {
    const { dispatch, footerArticles, users } = this.props
    return map(footerArticles, (article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : 'Author Deleted'
      return (
        <Grid item xs={12} md={4} key={article._id}>
          <FooterCard
            article={article}
            authorName={authorName}
            dispatch={dispatch}
            key={article._id}
          />
        </Grid>
      )
    })
  }

  onDeleteArticle = async () => {
    const { dispatch, userArticle } = this.props
    const articleId = userArticle._id
    if (!!articleId) {
      await dispatch(actions.deleteArticle(articleId))
    }
  }

  public render() {
    const { dispatch, userArticle } = this.props
    if (!userArticle) {
      return (
        <NotFound
          dispatch={dispatch}
        />
      )
    }
    return (
      <Grid container style={styles.container}>
        <Grid item md={2} xs={1} />
        <Grid item md={8} xs={10}>
          <Grid container>
            {this.renderArticle()}
          </Grid>
          <Divider style={styles.footerDivider} />
          <Grid container spacing={24}>
            {this.renderFooterCards()}
          </Grid>
        </Grid>
        <Grid item md={2} xs={1} />
      </Grid>
    )
  }
}

export default connect(selector)(ArticleDetail)
