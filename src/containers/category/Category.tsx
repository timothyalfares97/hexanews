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
        <Grid container style={{ flexDirection: 'column', marginLeft: '2%', marginTop: '2%'}}>
          <Typography
            component='h1'
            gutterBottom
            variant='headline'
            style={styles.h1 as any}
          >
            {categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
          </Typography>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} md={8} style={styles.latestArticleContainer}>
            {this.renderCategoryArticles()}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(Category as any)