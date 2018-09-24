/**
 * The ArticleRow Component for displaying all common article
 */

import { CardMedia, Grid } from '@material-ui/core'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
import * as moment from 'moment'
import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
 * Render ArticleRow component
 */
const ArticleRow: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
  const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
  const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
  const articleId = article._id ? article._id : ''
  return (
    <Grid
      style={styles.container}
      onClick={() => dispatch(push(HEADER_LINK.articleDetailRow(articleId)))}
    >
      <Card style={styles.card}>
        <Grid style={styles.details as any}>
          <CardContent style={styles.content}>
            <Typography
              variant='title'
              style={styles.title as any}
            >
              {article.title}
            </Typography>
            <Typography component='p'>
              {articleDescription}
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
        </Grid>
        <Grid style={styles.imageContainer}>
          <CardMedia
            style={styles.cover}
            image={articleImage}
          />
        </Grid>
      </Card>
    </Grid>
  )
}

export default ArticleRow