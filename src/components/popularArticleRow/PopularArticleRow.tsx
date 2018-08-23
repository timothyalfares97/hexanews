import * as React from 'react'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

type Props = {
  author: string,
  title: string,
}

const PopularArticleRow: React.StatelessComponent<Props> = ({
  author,
  title,
}) => {
  return (
    <div style={styles.container}>
      <Typography variant='subheading'>
        {title}
      </Typography>
      <Typography
        variant='body1'
        color='textSecondary'
        style={styles.author}
      >
        {author}
      </Typography>
    </div>
  )
}

export default PopularArticleRow