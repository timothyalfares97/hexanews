import * as React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  author: string,
  title: string,
}

const styles = {
  author: {
    marginTop: 4
  },
  container: {
    marginTop: 24
  },
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