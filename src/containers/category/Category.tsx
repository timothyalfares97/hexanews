/**
 * Display All article that contain in certain category screen
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { map, find, startCase } from 'lodash'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
    const { category, categories } = this.props
    return (
      <div style={styles.container}>
        <CategoryHeader categories={categories}/>
        <Grid container style={styles.categoryContainer as any}>
          <Typography
            component='h1'
            gutterBottom
            variant='headline'
            style={styles.h1 as any}
          >
            {startCase(category.title)}
          </Typography>
          <Typography
            component='h1'
            gutterBottom
            variant='subheading'
            style={styles.h1 as any}
          >
            {category.description}
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