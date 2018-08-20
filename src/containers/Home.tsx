import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import ArticleCard from '../components/ArticleCard'
import ArticleRow from '../components/ArticleRow'
import PopularArticleRow from '../components/PopularArticleRow'

type Props = {
  history: History
}

const styles = {
  articleDivider: {
    marginTop: 20,
    marginLeft: 24,
  },
  container: {
    padding: '5%',
    paddingLeft: '7%',
  },
  divider: {
    marginTop: 64,
    marginRight: 18,
  },
  latestPostContainer: {
    marginRight: 24,
  },
  popularArticles: {
    marginLeft: 36,
  },
  topStory: {
    marginTop: 32,
    marginLeft: 24,
  },
}

export default class Home extends React.Component<Props> {

  public render() {
    return (
      <div style={styles.container}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <ArticleCard
              history={this.props.history}
              title='Adjustable sidebar using Angular'
              description='Also for this tutorial I din’t put accent on CSS,
                I assume that you already created a sidebar which you need to make draggable.'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              history={this.props.history}
              title='Implement Google Analytics for React Native'
              description='For almost every product that is built or launched in the market, the business and development
               teams testing there'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              history={this.props.history}
              title='One Book at The Time —A Short Story'
              description='There had been times she had almost given up. All the lying, the sneaking around.
                But today she once more managed to continue'
            />
          </Grid>
        </Grid>
        <Divider style={styles.divider}/>
        <Grid container spacing={24}>
          <Grid item xs={8} style={styles.latestPostContainer}>
            <ArticleRow
              title='We Still Don’t Know Whether Uber Is a Real Business'
              description='It has never had to live on the cash it generates.'
            />
            <ArticleRow
              title='Happy All the Time'
              description='As biometric tracking takes over the modern workplace'
            />
            <ArticleRow
              title='If you’re a developer, you should start blogging — and here’s why'
              description='My blogging journey and skills I’ve acquired along the way'
            />
          </Grid>
          <Grid item xs={3}>
            <Typography variant='headline' component='h2' style={styles.topStory}>
              Top story in Hexanews
            </Typography>
            <Divider style={styles.articleDivider}/>
            <div style={styles.popularArticles}>
              <PopularArticleRow
                author={'Daniel Wu'}
                title={'The software engineer’s guide'}
              />
              <PopularArticleRow
                author={'Jesse Weaver'}
                title={'Design won\'t save the world'}
              />
              <PopularArticleRow
                author={'Mohammed Aladdin'}
                title={'Write clean code and get rid of code smell'}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}
