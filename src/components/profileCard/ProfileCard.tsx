/**
 * The ProfileCard Component for displaying profile detail in account container
 */

import { Grid, CardMedia } from '@material-ui/core'
import * as moment from 'moment'
import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { DATE_FORMAT } from '../../constants/config'
import i18n from '../../i18n'
import styles from './styles'

/**
 * All props required by the components
 */
type Props = {
  createdAt: string
  description: string,
  image: string,
  name: string,
}

/**
 * Render the ProfileCard component
 */
const ProfileCard: React.StatelessComponent<Props> = ({
  createdAt,
  description,
  image,
  name,
}) => {
  return (
    <Grid>
      <Card style={styles.card}>
        <Grid style={styles.details as any}>
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
              {`${i18n.t('profileCard.memberSince')} ${moment(createdAt).format(DATE_FORMAT)}`}
            </Typography>
          </CardContent>
        </Grid>
        <Grid style={styles.imageContainer}>
          <CardMedia
            style={styles.avatar}
            image={image}
          />
        </Grid>
      </Card>
    </Grid>
  )
}

export default ProfileCard