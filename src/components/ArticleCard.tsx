import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import placeholder from '../assets/placeholder.png'

type Props = {
  title: string,
  description: string,
  history: History,
}

const styles = {
  root: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  card: {
    maxWidth: 385,
    boxShadow: '0px 0.25px 0.35px 0.35px rgba(0, 0, 0, 0.1)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}

const ArticleCard: React.StatelessComponent<Props> = ({
  history,
  title,
  description
}) => {
  return (
    <div style={styles.root} onClick={() => history.push('/postDetail')}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={placeholder}
        />
        <CardContent>
          <Typography
            component='h2'
            gutterBottom
            variant='headline'
          >
            {title}
          </Typography>
          <Typography component='p'>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ArticleCard