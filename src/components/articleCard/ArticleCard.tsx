/**
 * Display article card component.
 */
import * as React from 'react'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import * as Config from '../../constants/config'

type Props = {
  title: string,
  description: string,
  dispatch: Dispatch<any>,
}

const ArticleCard: React.StatelessComponent<Props> = ({
  title,
  description,
  dispatch,
}) => {
  return (
    <div style={styles.root} onClick={() => dispatch(push(Config.HEADER_LINK.articleDetail))}>
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