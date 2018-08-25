import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import styles from './styles'

type Props = {
  history: History
}

export default class Categories extends React.Component<Props> {

  renderCategoriesCard = () => {
    const categories = ['art', 'comics', 'culture', 'film', 'food',
      'gaming', 'humor', 'lit', 'music', 'photography', 'sports']
    return categories.map((item, i) => {
      return (
        <Grid item xs={3}>
          <CategoryCard
            history={this.props.history}
            category={item.charAt(0).toUpperCase() + item.slice(1)}
          />
        </Grid>
      )
    })
  }
  public render() {
    return (
      <div style={styles.container}>
        <CategoryHeader />
        <Typography
          component='h1'
          gutterBottom
          variant='headline'
        >
          Explore categories
        </Typography>
        <Grid container spacing={24} style={{ paddingTop: '2%' }}>
          {this.renderCategoriesCard()}
        </Grid>
      </div>
    )
  }
}