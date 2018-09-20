/**
 * Search Article Container for user to search any articles based on keyword
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { translate } from 'react-i18next'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { isEmpty, map, filter, find, head, startCase } from 'lodash'
import * as moment from 'moment'
import { CardMedia } from '@material-ui/core'

import { Article } from '../../domain/model/Article'
import { DATE_FORMAT } from '../../constants/config'
import { User } from '../../domain/model/User'
import i18n from '../../i18n'
import placeholder from '../../assets/placeholder.png'
import selector, { StateProps } from './selector'
import styles from './styles'
import Utils from '../../utils'

export type Props = StateProps

export interface ComponentState {
  query: string
}

export class SearchArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  getFilteredArticles = () => {
    const { articles } = this.props
    const query = this.state.query.trim().toLowerCase()
    return filter(articles, (article: any) => article.title.toLowerCase().indexOf(query) !== -1)
  }

  handleQueryChange = (event: any) => {
    this.setState({ query: event.target.value })
  }

  renderAvatar = (authorName: string) => {
    const initials = head(startCase(authorName))
    return <Avatar style={styles.avatar}>{initials}</Avatar>
  }

  renderArticles = (filteredArticles: Article[]) => {
    const { users } = this.props

    if (isEmpty(filteredArticles)) {
      return (
        <div>
          <p>{i18n.t('searchArticle.noArticlesFound')}</p>
        </div>
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

  public render() {
    const query = this.state.query
    const filteredArticles = this.getFilteredArticles()
    return (
      <div style={styles.container}>
        <Grid container>
          <Grid md={3} xs={1}/>
          <Grid md={6} xs={10}>
            <TextField
              id='query'
              label={i18n.t('searchArticle.search')}
              value={query}
              onChange={this.handleQueryChange}
              style={styles.textField}
              margin='normal'
            />
          </Grid>
          <Grid md={3} xs={1}/>
        </Grid>
        <Grid container spacing={24}>
          <Grid md={3} xs={1}/>
          <Grid item md={6} xs={10} style={styles.articleContainer}>
            {this.renderArticles(filteredArticles)}
          </Grid>
          <Grid md={3} xs={1}/>
        </Grid>
      </div>
    )
  }
}

const ConnectedSearchArticle = connect(selector)(SearchArticle)

export default translate('translations')(ConnectedSearchArticle)