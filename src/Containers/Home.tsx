import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import ArticleCard from '../components/ArticleCard'
import ArticleRow from '../components/ArticleRow'
import PopularArticleRow from '../components/PopularArticleRow'

class Home extends React.Component {
  public render() {
    return (
      <div style={{ padding: '5%', paddingLeft: '7%' }}>
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <ArticleCard
              title='Adjustable sidebar using Angular'
              description='Also for this tutorial I din’t put accent on CSS,
                I assume that you already created a sidebar which you need to make draggable.'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              title='Implement Google Analytics for React Native'
              description='For almost every product that is built or launched in the market, the business and development
               teams testing there'
            />
          </Grid>
          <Grid item xs={4}>
            <ArticleCard
              title='One Book at The Time —A Short Story'
              description='There had been times she had almost given up. All the lying, the sneaking around.
                But today she once more managed to continue'
            />
          </Grid>
        </Grid>
        <Divider style={{marginTop: 64, marginRight: 18 }}/>
        <Grid container spacing={24}>
          <Grid item xs={8} style={{ marginRight: 24 }}>
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
            <Typography variant='headline' component='h2' style={{ marginTop: 32, marginLeft: 24 }}>
              Top story in Hexanews
            </Typography>
            <Divider style={{ marginTop: 20, marginLeft: 24 }}/>
            <div style={{ marginLeft: 36 }}>
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

export default Home
