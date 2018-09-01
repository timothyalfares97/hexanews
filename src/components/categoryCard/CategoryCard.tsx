/**
 * Display category card component.
 */
import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'

type Props = {
  category: string,
  dispatch: Dispatch<any>,
}

const CategoryCard: React.StatelessComponent<Props> = ({
  category,
  dispatch
}) => {
  return (
    <div style={styles.root}>
      <Card style={styles.card} onClick={() => dispatch(push(`/category/${category}`))}>
        <CardMedia
          style={styles.media}
          image={placeholder}
        />
        <CardContent>
          <Typography variant='title'>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CategoryCard