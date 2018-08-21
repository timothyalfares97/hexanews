import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import placeholder from '../assets/placeholder.png'

type Props = {
  title: string,
  description: string
}

const styles = {
  author: {
    marginTop: 28
  },
  card: {
    display: 'flex',
    boxShadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.2)'
  },
  date: {
    marginTop: 2,
  },
  details: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  container: {
    marginTop: 24,
  },
  cover: {
    width: 151,
    height: 151,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    display: 'flex',
  },
  title: {
    marginBottom: 8
  },
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