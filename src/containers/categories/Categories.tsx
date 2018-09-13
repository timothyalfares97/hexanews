/**
 * Display Categories screen containing all Category component
 */

import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { map } from 'lodash'
import { connect } from 'react-redux'

import CategoryHeader from '../../components/categoryHeader/CategoryHeader'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import styles from './styles'
import categories from './mockCategories'
import { categoriesString } from '../../constants/string'

export type Props = {
  dispatch: Dispatch<any>
}

export class Categories extends React.Component<Props> {

  renderCategoriesCard = () => (
    map(categories, (item) => (
      <Grid item md={3} xs={6} key={item}>
        <CategoryCard
          dispatch={this.props.dispatch}
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
          style={styles.h1 as any}
        >
          {categoriesString.exploreCategory}
        </Typography>
        <Grid container spacing={24} style={styles.gridContainer}>
          {this.renderCategoriesCard()}
        </Grid>
      </div>
    )
  }
}

export default connect()(Categories)