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
import { Article } from '../../domain/model/Article'

type Props = {
  article: Article,
  dispatch: Dispatch<any>,
}

const ArticleCard: React.StatelessComponent<Props> = ({
  article,
  dispatch,
}) => {
  const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
  const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
  return (
    <div id={`article-${article.title}`}
      style={styles.root}
      onClick={() => dispatch(push(`${Config.HEADER_LINK.articleDetail}/${article._id}`))}
    >
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
            {article.title}
          </Typography>
          <Typography component='p'>
            {articleDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ArticleCard