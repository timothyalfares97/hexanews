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
  card: {
    display: 'flex',
    boxShadow: '0px 0.5px 0px 0px rgba(0, 0, 0, 0.2)'
  },
  details: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
}

const ArticleRow: React.StatelessComponent<Props> = ({
  title,
  description
}) => {
  return (
    <div style={{marginTop: 24}}>
      <Card style={styles.card as any}>
        <div style={styles.details as any}>
          <CardContent style={styles.content}>
            <Typography variant='headline' style={{marginBottom: 8}}>{title}</Typography>
            <Typography component='p'>
              {description}
            </Typography>
          </CardContent>
        </div>
        <div style={{ flex: 1, justifyContent: 'flex-end', display: 'flex'}}>
          <CardMedia
            style={styles.cover}
            image={placeholder}
            title='Live from space album cover'
          />
        </div>
      </Card>
    </div>
  )
}

export default ArticleRow