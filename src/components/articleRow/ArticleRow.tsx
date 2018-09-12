/**
 * Display article row component.
 */

import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import * as moment from 'moment'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import styles from './styles'
import { Article } from '../../domain/model/Article'

type Props = {
  article: Article,
  authorName: string,
  dispatch: Dispatch<any>,
}

const ArticleRow: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const sanitizedDescription = article.description.replace(/<(?:.|\n)*?>/gm, '')
  const articleDescription = sanitizedDescription.length > 128 ? `${sanitizedDescription.substring(0, 128)}...` : sanitizedDescription
  return (
    <div
      style={styles.container}
      onClick={() => dispatch(push(`../articleDetail/${article._id}`))}
    >
      <Card style={styles.card}>
        <div style={styles.details as any}>
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
              {moment(article.createdAt).format('D MMMM YYYY')}
            </Typography>
          </CardContent>
        </div>
        <div style={styles.imageContainer}/>
      </Card>
    </div>
  )
}

export default ArticleRow