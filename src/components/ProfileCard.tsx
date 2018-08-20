import * as React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

type Props = {
  name: string,
  description: string,
  image: string,
}

const styles = {
  card: {
    display: 'flex',
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)',
  },
  details: {
    display: 'flex',
    flex: 4,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: '50%',
  },
}

const ProfileCard: React.StatelessComponent<Props> = ({
  name,
  description,
  image,
}) => {
  return (
    <div>
      <Card style={styles.card as any}>
        <div style={styles.details as any}>
          <CardContent style={styles.content}>
            <Typography variant='display1' component='h1'>
              {name}
            </Typography>
            <Typography component='p'>
              {description}
            </Typography>
          </CardContent>
        </div>
        <div style={{ flex: 1, justifyContent: 'flex-end', display: 'flex' }}>
          <img style={styles.avatar} src={image} alt='avatar' />
        </div>
      </Card>
    </div>
  )
}

export default ProfileCard