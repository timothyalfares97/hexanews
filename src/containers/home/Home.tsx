/**
 * Home container for displaying all articles and featured articles
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { map, orderBy, take, find, filter } from 'lodash'

import ArticleCard from '../../components/articleCard/ArticleCard'
import ArticleRow from '../../components/articleRow/ArticleRow'
import PopularArticleRow from '../../components/popularArticleRow/PopularArticleRow'
import styles from './styles'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import { homeString } from '../../constants/string'
import selector, { StateProps } from './selector'
import { User } from '../../domain/model/User'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

export class Home extends React.Component<Props> {

  renderAllArticles = () => {
    const { articles, dispatch, users } = this.props
    const orderedArticles = orderBy(articles, ['createdAt'], ['desc'])
    return map(orderedArticles, (article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : ''
      return (
        <ArticleRow
          article={article}
          authorName={authorName}
          dispatch={dispatch}
          key={article._id}
        />
      )
    })
  }

  renderFeaturedArticles = () => {
    const { articles, dispatch } = this.props
    const featuredArticles = filter(articles, ['isFeatured', true])
    return map(featuredArticles, (article) => {
      return (
        <Grid item md={4} xs={12} key={article._id}>
          <ArticleCard
            article={article}
            dispatch={dispatch}
            key={article._id}
          />
        </Grid>
      )
    })
  }

  renderPopularArticles = () => {
    const { articles, dispatch, users } = this.props
    const sortedPopularArticles = orderBy(articles, ['views'], ['desc'])
    const threePopularArticles = take(sortedPopularArticles, 3)
    return map(threePopularArticles, (article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : ''
      return (
        <PopularArticleRow
          article={article}
          authorName={authorName}
          dispatch={dispatch}
          key={article._id}
        />
      )
    })
  }

  public render() {
    return (
      <div style={styles.container}>
        <CategoryHeader />
        <Grid container spacing={24} style={styles.gridContainer}>
          {this.renderFeaturedArticles()}
        </Grid>
        <Divider style={styles.divider} />
        <Grid container spacing={24}>
          <Grid item md={8} xs={12} style={styles.latestArticleContainer}>
            {this.renderAllArticles()}
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography variant='headline' component='h2' style={styles.topStory}>
              {homeString.topStory}
            </Typography>
            <Divider style={styles.articleDivider} />
            <div style={styles.popularArticles}>
              {this.renderPopularArticles()}
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(Home)