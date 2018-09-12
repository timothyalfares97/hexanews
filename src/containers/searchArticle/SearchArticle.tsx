/**
 * Search Article Container for user to search any articles based on keyword
 */

import * as React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { isEmpty, map, filter, find, head, startCase } from 'lodash'
import * as moment from 'moment'

import selector, { StateProps } from './selector'
import styles from './styles'
import { Article } from '../../domain/model/Article'
import { User } from '../../domain/model/User'

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
          <p>There is no articles found</p>
        </div>
      )
    }

    return map(filteredArticles, (article: Article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : ''
      return (
        <Card style={styles.card} key={article._id}>
          <CardHeader
            avatar={this.renderAvatar(authorName)}
            title={authorName}
            subheader={moment(article.createdAt).format('DD MMMM YYYY')}
          />
          <CardContent>
            <Typography gutterBottom variant='headline' component='h2'>
              {article.title}
            </Typography>
            <Typography component='p'>
              {article.description}
            </Typography>
          </CardContent>
        </Card>
      )
    })
  }

  public render() {
    const query = this.state.query.trim().toLowerCase()
    const filteredArticles = this.getFilteredArticles()
    return (
      <div style={styles.container}>
        <form>
          <TextField
            id='query'
            label='Search'
            value={query}
            onChange={this.handleQueryChange}
            style={styles.textField}
            margin='normal'
          />
        </form>
        <Grid container spacing={24}>
          <Grid item xs={12} style={styles.articleContainer}>
            {this.renderArticles(filteredArticles)}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(SearchArticle)
