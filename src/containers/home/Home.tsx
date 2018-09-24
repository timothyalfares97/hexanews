/**
 * Display home container for displaying all articles and featured articles
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { map, orderBy, take, find, filter } from 'lodash'
import { translate } from 'react-i18next'
import * as React from 'react'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { User } from '../../domain/model/User'
import ArticleCard from '../../components/articleCard/ArticleCard'
import ArticleRow from '../../components/articleRow/ArticleRow'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import i18n from '../../i18n'
import PopularArticleRow from '../../components/popularArticleRow/PopularArticleRow'
import selector, { StateProps } from './selector'
import styles from './styles'

/**
 * All props required by the container
 */
type Props = {
  dispatch: Dispatch<any>
} & StateProps

export class Home extends React.Component<Props> {

  /**
   * Function that render all articles
   */
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

  /**
   * Function that render featured articles
   */
  renderFeaturedArticles = () => {
    const { articles, dispatch, users } = this.props
    const featuredArticles = filter(articles, ['isFeatured', true])
    return map(featuredArticles, (article) => {
      const author = find(users, (user: User) => user._id === article.authorId)
      const authorName = author ? author.name : ''
      return (
        <Grid item md={4} xs={12} key={article._id}>
          <ArticleCard
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
   * Function that render the top popular articles
   */
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

  /**
   * Render Home container
   */
  public render() {
    const { categories } = this.props
    return (
      <Grid style={styles.container}>
        <CategoryHeader categories={categories}/>
        <Grid container spacing={24} style={styles.gridContainer}>
          {this.renderFeaturedArticles()}
        </Grid>
        <Divider style={styles.divider} />
        <Grid container spacing={24}>
          <Grid item md={8} xs={12} style={styles.latestArticleContainer}>
            {this.renderAllArticles()}
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              variant='title'
              component='h2'
              style={styles.topStory as any}
            >
              {i18n.t('home.topStory')}
            </Typography>
            <Divider style={styles.articleDivider} />
            <Grid style={styles.popularArticles}>
              {this.renderPopularArticles()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const ConnectedHome = connect(selector)(Home)

export default translate('translations')(ConnectedHome)