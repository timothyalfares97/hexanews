/**
 * Display All article that contain in certain category screen
 */

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { map, find } from 'lodash'
import { Dispatch } from 'redux'

import ArticleRow from '../../components/articleRow/ArticleRow'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import styles from './styles'
import selector, { StateProps } from './selector'
import { User } from '../../domain/model/User'

type Props = StateProps & {
  dispatch: Dispatch<any>
}

export class Category extends React.Component<Props> {

  renderCategoryArticles = () => {
    const { categoryArticles, dispatch, users } = this.props
    return map(categoryArticles, (article) => {
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

  public render() {
    const { categoryTitle } = this.props
    return (
      <div style={styles.container}>
        <CategoryHeader />
        <Typography
          component='h1'
          gutterBottom
          variant='headline'
        >
          {categoryTitle}
        </Typography>
        <Typography
          component='h2'
          gutterBottom
          variant='subheading'
        >
          Behind the scenes
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={8} style={styles.latestArticleContainer}>
            {this.renderCategoryArticles()}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(Category as any)