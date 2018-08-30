/**
 * Display All article that contain in certain category screen
 */

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import ArticleRow from '../../components/articleRow/ArticleRow'
import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import styles from './styles'

type Props = {
  history: History
}

export default class Category extends React.Component<Props> {
  public render() {
    return (
      <div style={styles.container}>
        <CategoryHeader />
        <Typography
          component='h1'
          gutterBottom
          variant='headline'
        >
          Film
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
            <ArticleRow
              title='Crazy Rich Asians: Does the movie live up the book?'
              description='Much buzz has been made about the movie version of Kevin Kwan’s novel Crazy Rich Asians.'
            />
            <ArticleRow
              title='Happy All the Time'
              description='As biometric tracking takes over the modern workplace'
            />
            <ArticleRow
              title='A Hollywood Without Immigrants'
              description='A Diversity Check on the 2008–17 Academy Awards, in Data'
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}