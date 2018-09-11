/**
 * Home container for displaying all articles and featured articles
 */

import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { map, orderBy, take } from 'lodash'

import ArticleCard from '../../components/articleCard/ArticleCard'
import ArticleRow from '../../components/articleRow/ArticleRow'
import PopularArticleRow from '../../components/popularArticleRow/PopularArticleRow'
import styles from './styles'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import { homeString } from '../../constants/string'
import selector, { StateProps } from './selector'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

export class Home extends React.Component<Props> {

  renderAllArticles = () => {
    const { articles, dispatch } = this.props
    const orderedArticles = orderBy(articles, ['createdAt'], ['desc'])
    return map(orderedArticles, (article) => (
      <ArticleRow
        article={article}
        dispatch={dispatch}
        key={article._id}
      />
    ))
  }

  renderPopularArticles = () => {
    const { articles, dispatch } = this.props
    const sortedPopularArticles = orderBy(articles, ['views'], ['desc'])
    const threePopularArticles = take(sortedPopularArticles, 3)
    return map(threePopularArticles, (article) => (
      <PopularArticleRow
        article={article}
        dispatch={dispatch}
        key={article._id}
      />
    ))
  }

  public render() {
    const { dispatch } = this.props
    return (
      <div style={styles.container}>
        <CategoryHeader />
        <Grid container spacing={24} style={styles.gridContainer}>
          <Grid item xs={4}>
            <ArticleCard
              dispatch={dispatch}
              title='Adjustable sidebar using Angular'
              description='Also for this tutorial I din’t put accent on CSS,
                I assume that you already created a sidebar which you need to make draggable.'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              dispatch={dispatch}
              title='Implement Google Analytics for React Native'
              description='For almost every product that is built or launched in the market, the business and development
               teams testing there'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              dispatch={dispatch}
              title='One Book at The Time —A Short Story'
              description='There had been times she had almost given up. All the lying, the sneaking around.
                But today she once more managed to continue'
            />
          </Grid>
        </Grid>
        <Divider style={styles.divider}/>
        <Grid container spacing={24}>
          <Grid item xs={8} style={styles.latestArticleContainer}>
            {this.renderAllArticles()}
          </Grid>
          <Grid item xs={3}>
            <Typography variant='headline' component='h2' style={styles.topStory}>
              {homeString.topStory}
            </Typography>
            <Divider style={styles.articleDivider}/>
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