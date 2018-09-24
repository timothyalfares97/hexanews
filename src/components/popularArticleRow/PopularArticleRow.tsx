/**
 * The PopularArticleRow Component for displaying popular article in home container
 */

import { Dispatch } from 'redux'
import { Grid } from '@material-ui/core'
import { push } from 'connected-react-router'
import * as React from 'react'
import Typography from '@material-ui/core/Typography'

import { HEADER_LINK } from '../../constants/config'
import { Article } from '../../domain/model/Article'
import styles from './styles'

/**
 * All props required by the components
 */
type Props = {
  article: Article,
  authorName: string,
  dispatch: Dispatch<any>,
}

/**
 * Render the PopularArticleRow component
 */
const PopularArticleRow: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const articleId = article._id ? article._id : ''
  return (
    <Grid
      style={styles.container}
      onClick={() => dispatch(push(HEADER_LINK.articleDetail(articleId)))}
    >
      <Typography
        variant='body1'
        style={styles.title as any}
      >
        {article.title}
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={styles.author}
      >
        {authorName}
      </Typography>
    </Grid>
  )
}

export default PopularArticleRow