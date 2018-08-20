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
  description: {
    marginTop: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
  },
  memberText: {
    marginTop: 12,
    fontSize: 12,
    color: 'gray',
  },
  imageContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
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