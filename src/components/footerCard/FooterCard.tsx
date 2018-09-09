/**
 * Display footer card component.
 */
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import * as Config from '../../constants/config'
import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import { footerCardString } from '../../constants/string'
import { Article } from '../../domain/model/Article'

type Props = {
  dispatch: Dispatch<any>,
  article: Article,
}

const FooterCard: React.StatelessComponent<Props> = ({
  article,
  dispatch,
}) => {
  return (
    <div style={styles.root} onClick={() => dispatch(push(Config.HEADER_LINK.articleDetail))}>
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
            {footerCardString.relatedRead}
          </Typography>
          <Typography
            component='h2'
            gutterBottom
            variant='subheading'
          >
            {article.title}
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