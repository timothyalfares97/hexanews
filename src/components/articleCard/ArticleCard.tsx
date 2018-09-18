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
import * as moment from 'moment'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import * as Config from '../../constants/config'
import { Article } from '../../domain/model/Article'
import Utils from '../../utils'

type Props = {
  article: Article,
  authorName: string,
  dispatch: Dispatch<any>,
}

const ArticleCard: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
  return (
    <div id={`article-${article.title}`}
      style={styles.root}
      onClick={() => dispatch(push(`${Config.HEADER_LINK.articleDetail}/${article._id}`))}
    >
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={articleImage}
        />
        <CardContent>
          <Typography
            component='h3'
            gutterBottom
            variant='headline'
            style={{ fontWeight: 'bold' }}
          >
            {article.title}
          </Typography>
          <Typography
            variant='body1'
            style={styles.author}
          >
            {authorName}
          </Typography>
          <Typography
            variant='body1'
            color='textSecondary'
            style={styles.date}
          >
            {moment(article.createdAt).format('D MMMM YYYY')}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default ArticleCard