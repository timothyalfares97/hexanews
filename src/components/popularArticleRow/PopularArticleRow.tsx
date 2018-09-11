/**
 * Display popular article row component.
 */

import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import styles from './styles'
import { Article } from '../../domain/model/Article'

type Props = {
  article: Article
  dispatch: Dispatch<any>
}

const PopularArticleRow: React.StatelessComponent<Props> = ({
  article,
  dispatch,
}) => {
  return (
    <div style={styles.container} onClick={() => dispatch(push(`articleDetail/${article._id}`))}>
      <Typography variant='subheading'>
        {article.title}
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={styles.author}
      >
        {'Hillary Clinton'}
      </Typography>
    </div>
  )
}

export default PopularArticleRow