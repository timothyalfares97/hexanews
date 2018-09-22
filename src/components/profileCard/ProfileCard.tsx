/**
 * The ProfileCard Component for displaying profile detail in account container
 */

import * as React from 'react'
import * as moment from 'moment'
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
  name: string,
  description: string,
  image: string,
  createdAt: string
}

/**
 * Render the ProfileCard component
 */
const ProfileCard: React.StatelessComponent<Props> = ({
  name,
  description,
  image,
  createdAt,
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
              {`${i18n.t('profileCard.memberSince')} ${moment(createdAt).format(DATE_FORMAT)}`}
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