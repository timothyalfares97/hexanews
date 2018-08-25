import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'

type Props = {
  category: string,
  history: History,
}

const CategoryCard: React.StatelessComponent<Props> = ({
  category,
  history
}) => {
  return (
    <div style={styles.root}>
      <Card style={styles.card} onClick={() => history.push(`/categories/${category}`)}>
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