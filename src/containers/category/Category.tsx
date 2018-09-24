/**
 * Display all articles that are contained in certain category screen
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { map, find, startCase, isEmpty } from 'lodash'
import { translate } from 'react-i18next'
import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { User } from '../../domain/model/User'
import ArticleRow from '../../components/articleRow/ArticleRow'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'

/**
 * All props required by the container
 */
type Props = StateProps & {
  dispatch: Dispatch<any>
}

export class Category extends React.Component<Props> {

  /**
   * Function that render the articles in the category
   */
  renderCategoryArticles = () => {
    const { categoryArticles, dispatch, users } = this.props

    if (isEmpty(categoryArticles)) {
      return (
        <Grid style={styles.emptyArticle}>
          <Typography>
            {i18n.t('category.noArticle')}
          </Typography>
        </Grid>
      )
    }

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

  /**
   * Render Category container
   */
  public render() {
    const { category, categories } = this.props
    return (
      <Grid style={styles.container}>
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
          <Grid item xs={12} md={9} style={styles.latestArticleContainer}>
            {this.renderCategoryArticles()}
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const ConnectedCategory = connect(selector)(Category as any)

export default translate('translations')(ConnectedCategory)