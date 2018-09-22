/**
 * Create Article containers for users to create article
 */

import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import { translate } from 'react-i18next'
import Select from '@material-ui/core/Select'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
import { head, startCase } from 'lodash'
const ReactQuill = require('react-quill')

import * as actions from './actions'
import styles from './styles'
import selector, { StateProps } from './selector'
import { TEXT_EDITOR } from '../../constants/config'
import i18n from '../../i18n'
import SuccessSnackbar from '../../components/successSnackbar/SuccessSnackbar'

export type Props = {
  dispatch: Dispatch<any>
} & StateProps

export interface ComponentState {
  category: string
  description: string
  title: string
  isSnackbarOpen: boolean
}

export class CreateArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      category: '',
      description: '',
      title: '',
      isSnackbarOpen: false,
    }
  }

  handleCategoryChange = (event: any) => {
    this.setState({ category: event.target.value })
  }

  handleTitleChange = (event: any) => {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange = (html: any) => {
    this.setState({ description: html })
  }

  disablePublishButton() {
    const { category, description, title } = this.state
    return (category === '' || description === '' || title === '')
  }

  handleClose = () => {
    this.setState({ isSnackbarOpen: false })
  }

  onCreateArticle = async () => {
    const { dispatch } = this.props
    const { title, category, description } = this.state
    const authorId = localStorage.getItem('id') || ''

    const newArticle = { title, category, description, authorId }
    await dispatch(actions.createArticle(newArticle))

    const { createArticleError } = this.props

    if (createArticleError === '') {
      this.setState({ isSnackbarOpen: true, category: '', description: '', title: '' })
      setTimeout(() => dispatch(push('/profile')), 750)
    }
  }

  public render() {
    const { dispatch, user, isCreatingArticle, createArticleError } = this.props
    const { title, category, description, isSnackbarOpen } = this.state
    const initials = head(startCase(user.name))
    return (
      <div style={styles.container}>
        <Grid container>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10} style={styles.profileContainer}>
            <Avatar style={styles.avatar}>{initials}</Avatar>
            <div style={styles.profile as any}>
              <Typography variant='subheading' style={styles.title}>
                {user.name}
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                {user.description}
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                {i18n.t('createArticle.draft')}
              </Typography>
            </div>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10}>
            <TextField
              id='title'
              label={i18n.t('createArticle.title')}
              value={title}
              onChange={this.handleTitleChange}
              style={styles.textField}
              margin='normal'
            />
            <FormControl required style={styles.categoryTextField}>
              <InputLabel htmlFor='category-required'>{i18n.t('createArticle.category')}</InputLabel>
              <Select
                value={category}
                onChange={this.handleCategoryChange}
                name='category'
              >
                <MenuItem value='technology'>Technology</MenuItem>
                <MenuItem value='science'>Science</MenuItem>
                <MenuItem value='art'>Art</MenuItem>
                <MenuItem value='design'>Design</MenuItem>
                <MenuItem value='culture'>Culture</MenuItem>
                <MenuItem value='photography'>Photography</MenuItem>
                <MenuItem value='leadership'>Leadership</MenuItem>
                <MenuItem value='math'>Math</MenuItem>
                <MenuItem value='economy'>Economy</MenuItem>
                <MenuItem value='music'>Music</MenuItem>
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
            <ReactQuill
              value={description}
              onChange={this.handleDescriptionChange}
              formats={TEXT_EDITOR.formats}
              modules={TEXT_EDITOR.modules}
              placeholder={i18n.t('createArticle.descriptionPlaceholder')}
              theme={TEXT_EDITOR.theme}
              style={styles.descTextField}
            />
            <Typography
              variant='body1'
              component='h2'
              color='textPrimary'
              style={styles.errorCreateLabel}
            >
              {createArticleError}
            </Typography>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container style={styles.buttonContainer}>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10} >
            <Button
              variant='outlined'
              component='button'
              style={styles.button}
              disabled={this.disablePublishButton()}
              onClick={this.onCreateArticle}
            >
              {isCreatingArticle ? <CircularProgress size={22} /> : i18n.t('createArticle.publishButton')}
            </Button>
            <Button
              id='cancelButton'
              variant='outlined'
              component='button'
              style={styles.button}
              onClick={() => dispatch(push('/'))}
            >
              {i18n.t('createArticle.cancelButton')}
            </Button>
          </Grid>
          <Grid item md={3} xs={1} />
        </Grid>
        <SuccessSnackbar
          isSnackbarOpen={isSnackbarOpen}
          message={i18n.t('createArticle.createArticleSuccess')}
          handleClose={this.handleClose}
        />
      </div>
    )
  }
}

const ConnectedCreateArticle = connect(selector)(CreateArticle)

export default translate('translations')(ConnectedCreateArticle)