/**
 * Display All article that contain in certain category screen
 */

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { Dispatch } from 'redux'

import ArticleRow from '../../components/articleRow/ArticleRow'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import styles from './styles'
import selector, { StateProps } from './selector'

type Props = StateProps & {
  dispatch: Dispatch<any>
}

export class Category extends React.Component<Props> {
  public render() {
    const { categoryArticles, categoryTitle, dispatch } = this.props
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
            {map(categoryArticles, (article) => (
              <ArticleRow
                article={article}
                dispatch={dispatch}
                key={article._id}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(Category as any)