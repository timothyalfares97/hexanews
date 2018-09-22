/**
 * The PopularArticleRow Component for displaying popular article in home container
 */

import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import styles from './styles'
import { Article } from '../../domain/model/Article'

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
  return (
    <div style={styles.container} onClick={() => dispatch(push(`articleDetail/${article._id}`))}>
      <Typography
        variant='body1'
        style={{ fontWeight: ' bold' } as any}
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
    </div>
  )
}

export default PopularArticleRow