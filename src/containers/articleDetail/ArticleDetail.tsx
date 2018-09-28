/**
 * Display article detail container containing the article description
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { map, find, head, startCase } from 'lodash'
import { push } from 'connected-react-router'
import { translate } from 'react-i18next'
import * as moment from 'moment'
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import ReactHtmlParser from 'react-html-parser'
import Typography from '@material-ui/core/Typography'

import { DATE_FORMAT, HEADER_LINK } from '../../constants/config'
import { NotFound } from '../notFound/NotFound'
import { User } from '../../domain/model/User'
import * as actions from './actions'
import FooterCard from '../../components/footerCard/FooterCard'
import i18n from '../../i18n'
import ScrollRestoration from './ScrollRestoration'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../../components/successSnackbar/SuccessSnackbar'

/**
 * All props required by the container
 */
type Props = {
  dispatch: Dispatch<any>
} & StateProps

/**
 * All state required by the container
 */
interface ComponentState {
  isDeleteSnackbarOpen: boolean
}

export class ArticleDetail extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Article Detail container and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      isDeleteSnackbarOpen: false,
    }
  }

  /**
   * Function to close snackbar after delete article success
   */
  handleDeleteClose = () => {
    this.setState({ isDeleteSnackbarOpen: false })
  }

  /**
   * Function that render the article description
   */
  renderArticle = () => {
    const { dispatch, users, userArticle, isUserArticle, isDeletingArticle } = this.props
    if (!!userArticle) {
      const authorId = userArticle.authorId
      const author = find(users, (user: User) => user._id === authorId)
      const authorName = author ? author.name : i18n.t('articleDetail.authorDeleted')
      const initials = head(startCase(authorName))
      return (
        <Grid style={styles.contentContainer}>
          <Grid style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              {initials}
            </Avatar>
            <Grid style={styles.detailContainer as any}>
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
                {moment(userArticle.createdAt).format(DATE_FORMAT)}
              </Typography>
            </Grid>
            <Grid style={styles.buttonContainer}>
              {isUserArticle &&
                <Button
                  variant='outlined'
                  size='small'
                  component='button'
                  style={styles.editArticle}
                  onClick={() => dispatch(push(`../editArticle/${userArticle._id}`))}
                >
                  {i18n.t('articleDetail.editArticle')}
                </Button>
              }
              {isUserArticle &&
                <Button
                  variant='outlined'
                  size='small'
                  component='button'
                  style={styles.deleteArticle}
                  onClick={this.onDeleteArticle}
                >
                  {isDeletingArticle ? <CircularProgress size={22} /> : i18n.t('articleDetail.deleteArticle')}
                </Button>
              }
            </Grid>
          </Grid>
          <Typography
            variant='display1'
            component='h1'
            gutterBottom
          >
            {userArticle.title}
          </Typography>
          {ReactHtmlParser(userArticle.description)}
        </Grid>
      )
    }
    return
  }

  /**
   * Function that render footer cards for related articles
   */
  renderFooterCards = () => {
    const { dispatch, footerArticles, users } = this.props
    return map(footerArticles, (article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : i18n.t('articleDetail.authorDeleted')
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

  /**
   * Function that call deleteArticle action to delete the article
   */
  onDeleteArticle = async () => {
    const { dispatch, userArticle } = this.props
    const articleId = userArticle._id
    if (!!articleId) {
      this.setState({ isDeleteSnackbarOpen: true })
      setTimeout(async () => {
        await dispatch(actions.deleteArticle(articleId))
        dispatch(push(HEADER_LINK.profile))
      }, 500)
    }
  }

  /**
   * Render Article Detail container
   */
  public render() {
    const { dispatch, userArticle } = this.props
    const { isDeleteSnackbarOpen } = this.state

    if (!userArticle) {
      return (
        <NotFound
          dispatch={dispatch}
        />
      )
    }

    return (
      <ScrollRestoration>
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
          <SuccessSnackbar
            isSnackbarOpen={isDeleteSnackbarOpen}
            message={i18n.t('articleDetail.deleteArticleSuccess')}
            handleClose={this.handleDeleteClose}
          />
        </Grid>
      </ScrollRestoration>
    )
  }
}

const ConnectedArticleDetail = connect(selector)(ArticleDetail)

export default translate('translations')(ConnectedArticleDetail)