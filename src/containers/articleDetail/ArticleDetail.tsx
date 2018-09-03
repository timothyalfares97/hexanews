/**
 * Display Article Detail screen containing the article description
 */

import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { map } from 'lodash'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import * as actions from './actions'
import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import { Article } from '../../domain/model/Article'
import FooterCard from '../../components/footerCard/FooterCard'
import selector, { StateProps } from './selector'

type Props = {
  dispatch: Dispatch<any>
  article: Article
} & StateProps

class ArticleDetail extends React.Component<Props> {

  renderMultilineText = () => {
    // tslint:disable:max-line-length
    const text = `Also for this tutorial I din’t put accent on CSS I assume that you already created a sidebar which you need to make draggable. For my example the structure is pretty simple, the class attributes are used only for CSS purposes. The #sidebarIdentifier is a property decorator that I will use to get the current width of the sidebar and the [style.width.px] is the Angular property that I will use to bind the new width.
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that`
    return text.split('\n').map((item, i) => {
      return <Typography style={styles.description}>{item}</Typography>
    })
  }

  renderFooterCards = () => {
    const { dispatch } = this.props
    const titles = ['React vs Angular vs Vue.js', 'New Features in Angular 2.0', 'React Native at Airbnb: The Technology']
    return map(titles, (title) => (
      <Grid item xs={4} key={title}>
        <FooterCard
          title={title}
          dispatch={dispatch}
        />
      </Grid>
    ))
  }

  onDeleteArticle = async () => {
    const { dispatch, userArticle } = this.props
    const articleId = userArticle._id
    if (!!articleId) {
      await dispatch(actions.deleteArticle(articleId))
    }

    dispatch(push('/profile'))
  }

  public render() {
    const { isUserArticle, isDeletingArticle } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              HC
            </Avatar>
            <div style={styles.detailContainer as any}>
              <Typography
                variant='subheading'
                style={styles.profileName}
              >
                {'Henry Connor'}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
              >
                {'20 August 2018'}
              </Typography>
            </div>
            <div style={styles.buttonContainer}>
              {isUserArticle &&
                <Button
                  variant='outlined'
                  size='small'
                  component='button'
                  style={{ alignSelf: 'center' }}
                  onClick={this.onDeleteArticle}
                >
                  {isDeletingArticle ? <CircularProgress size={22} /> : 'Delete article'}
                </Button>
              }
            </div>
          </div>
          <Typography
            variant='display1'
            component='h1'
          >
            {'Adjustable sidebar using Angular'}
          </Typography>
          <img src={placeholder} style={styles.placeholderImage} />
          {this.renderMultilineText()}
        </div>
        <Divider style={styles.footerDivider} />
        <Grid container spacing={24}>
          {this.renderFooterCards()}
        </Grid>
      </div>
    )
  }
}

export default connect(selector)(ArticleDetail)
