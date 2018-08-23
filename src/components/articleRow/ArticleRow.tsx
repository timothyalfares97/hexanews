import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'

type Props = {
  title: string,
  description: string
}

const ArticleRow: React.StatelessComponent<Props> = ({
  title,
  description
}) => {
  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <div style={styles.details as any}>
          <CardContent style={styles.content}>
            <Typography
              variant='headline'
              style={styles.title}
            >
              {title}
            </Typography>
            <Typography component='p'>
              {description}
            </Typography>
            <Typography
              variant='body1'
              style={styles.author}
            >
              {'Hillary Clinton'}
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              style={styles.date}
            >
              {'22 August 2018'}
            </Typography>
          </CardContent>
        </div>
        <div style={styles.imageContainer}>
          <CardMedia
            style={styles.cover}
            image={placeholder}
          />
        </div>
      </Card>
    </div>
  )
}

export default ArticleRow