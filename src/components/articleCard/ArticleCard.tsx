/**
 * The ArticleCard Component for displaying featured article
 */

import { Dispatch } from 'redux'
import { Grid } from '@material-ui/core'
import { push } from 'connected-react-router'
import * as moment from 'moment'
import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { Article } from '../../domain/model/Article'
import { DATE_FORMAT, HEADER_LINK } from '../../constants/config'
import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import Utils from '../../utils'

/**
 * All props required by the components
 */
type Props = {
  article: Article,
  authorName: string,
  dispatch: Dispatch<any>,
}

/**
 * Render ArticleCard component
 */
const ArticleCard: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
  const articleId = article._id ? article._id : ''
  return (
    <Grid
      id={`article-${article.title}`}
      style={styles.root}
      onClick={() => dispatch(push(HEADER_LINK.articleDetailRow(articleId)))}
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
            {moment(article.createdAt).format(DATE_FORMAT)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ArticleCard