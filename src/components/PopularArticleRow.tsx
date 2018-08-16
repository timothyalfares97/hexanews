import * as React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  author: string,
  title: string,
}

const PopularArticleRow: React.StatelessComponent<Props> = ({
  author,
  title,
}) => {
  return (
    <div style={{marginTop: 24}}>
      <Typography variant='subheading'>
        {title}
      </Typography>
      <Typography variant='body1' color='textSecondary' style={{ marginTop: 4}}>
        {author}
      </Typography>
    </div>
  )
}

export default PopularArticleRow