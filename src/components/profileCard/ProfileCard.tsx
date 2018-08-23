import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

type Props = {
  name: string,
  description: string,
  image: string,
}

const ProfileCard: React.StatelessComponent<Props> = ({
  name,
  description,
  image,
}) => {
  return (
    <div>
      <Card style={styles.card}>
        <div style={styles.details as any}>
          <CardContent style={styles.content}>
            <Typography
              variant='display1'
              component='h1'
            >
              {name}
            </Typography>
            <Typography
              component='p'
              style={styles.description}
            >
              {description}
            </Typography>
            <Typography
              component='p'
              style={styles.memberText}
            >
              {'Hexanews member since 20 August 2018'}
            </Typography>
          </CardContent>
        </div>
        <div style={styles.imageContainer}>
          <img
            style={styles.avatar}
            src={image}
            alt='avatar'
          />
        </div>
      </Card>
    </div>
  )
}

export default ProfileCard