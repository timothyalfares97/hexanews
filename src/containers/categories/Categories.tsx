import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'
import { map } from 'lodash'

import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import styles from './styles'
import categories from './mockCategories'

type Props = {
  history: History
}

export default class Categories extends React.Component<Props> {

  renderCategoriesCard = () => (
    map(categories, (item) => (
      <Grid item xs={3}>
        <CategoryCard
          history={this.props.history}
          category={item}
        />
      </Grid>
    ))
  )

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
        <Grid container spacing={24} style={styles.gridContainer}>
          {this.renderCategoriesCard()}
        </Grid>
      </div>
    )
  }
}