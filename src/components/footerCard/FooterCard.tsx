/**
 * Display footer card component.
 */
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import placeholder from '../../assets/placeholder.png'
import styles from './styles'

type Props = {
  title: string,
  history: History,
}

const FooterCard: React.StatelessComponent<Props> = ({
  title,
  history,
}) => {
  return (
    <div style={styles.root} onClick={() => history.push('/articleDetail')}>
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={placeholder}
        />
        <CardContent style={styles.cardContent}>
          <Typography
            component='h2'
            gutterBottom
            variant='caption'
          >
            Related reads
          </Typography>
          <Typography
            component='h2'
            gutterBottom
            variant='subheading'
          >
            {title}
          </Typography>
          <div style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              EK
            </Avatar>
            <div style={styles.detailContainer as any}>
              <Typography
                variant='body1'
                style={styles.profileName}
              >
                {'Erik Kennedy'}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={styles.date}
              >
                {'8 March 2018'}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FooterCard