/**
 * Display search article container for searching any articles based on the query
 */

import { CardMedia } from '@material-ui/core'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { isEmpty, map, filter, find, head, startCase } from 'lodash'
import { translate } from 'react-i18next'
import * as moment from 'moment'
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { Article } from '../../domain/model/Article'
import { DATE_FORMAT } from '../../constants/config'
import { User } from '../../domain/model/User'
import i18n from '../../i18n'
import placeholder from '../../assets/placeholder.png'
import selector, { StateProps } from './selector'
import styles from './styles'
import Utils from '../../utils'

/**
 * All props required by the container
 */
export type Props = {
  dispatch: Dispatch<any>
} & StateProps

/**
 * All state required by the container
 */
export interface ComponentState {
  query: string
}

export class SearchArticle extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Search Article container and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  /**
   * Function that get the filtered articles from the query entered
   */
  getFilteredArticles = () => {
    const { articles } = this.props
    const query = this.state.query.trim().toLowerCase()
    return filter(articles, (article: any) => article.title.toLowerCase().indexOf(query) !== -1)
  }

  /**
   * Function that handle onChange text in query textfield
   * @param event contain the query value from textField
   */
  handleQueryChange = (event: any) => {
    this.setState({ query: event.target.value })
  }

  /**
   * Function that render an avatar of the author's initals
   * @param authorName the name of the author
   */
  renderAvatar = (authorName: string) => {
    const initials = head(startCase(authorName))
    return <Avatar style={styles.avatar}>{initials}</Avatar>
  }

  /**
   * Function that render all the filtered articles
   */
  renderArticles = (filteredArticles: Article[]) => {
    const { users } = this.props

    if (isEmpty(filteredArticles)) {
      return (
        <Grid style={styles.emptyArticle}>
          <Typography variant='subheading'>
            {i18n.t('searchArticle.noArticlesFound')}
          </Typography>
        </Grid>
      )
    }

    return map(filteredArticles, (article: Article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : ''
      const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
      const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
      const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
      return (
        <Card style={styles.card} key={article._id}>
          <CardHeader
            avatar={this.renderAvatar(authorName)}
            title={authorName}
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
   * Render Search Article container
   */
  public render() {
    const query = this.state.query
    const filteredArticles = this.getFilteredArticles()
    return (
      <Grid style={styles.container}>
        <Grid container>
          <Grid item md={3} xs={1}/>
          <Grid item md={6} xs={10}>
            <TextField
              id='query'
              label={i18n.t('searchArticle.search')}
              value={query}
              onChange={this.handleQueryChange}
              style={styles.textField}
              margin='normal'
            />
          </Grid>
          <Grid item md={3} xs={1}/>
        </Grid>
        <Grid container spacing={24}>
          <Grid item md={3} xs={1}/>
          <Grid item md={6} xs={10} style={styles.articleContainer}>
            {this.renderArticles(filteredArticles)}
          </Grid>
          <Grid item md={3} xs={1}/>
        </Grid>
      </Grid>
    )
  }
}

const ConnectedSearchArticle = connect(selector)(SearchArticle)

export default translate('translations')(ConnectedSearchArticle)