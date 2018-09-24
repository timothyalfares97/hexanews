/**
 * Display create article container for creating article
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { head, startCase, map } from 'lodash'
import { push } from 'connected-react-router'
import { translate } from 'react-i18next'
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
const ReactQuill = require('react-quill')

import { Category } from '../../domain/model/Category'
import { TEXT_EDITOR, HEADER_LINK } from '../../constants/config'
import * as actions from './actions'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../../components/successSnackbar/SuccessSnackbar'

/**
 * All props required by the container
 */
export type Props = {
  dispatch: Dispatch<any>
} & StateProps

/**
 * All state required by the container
 */
export interface ComponentState {
  category: string
  description: string
  isSnackbarOpen: boolean
  title: string
}

export class CreateArticle extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Create Article container and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    this.state = {
      category: '',
      description: '',
      isSnackbarOpen: false,
      title: '',
    }
  }

  /**
   * Function that handle onChange text in category selector
   * @param event contain the current category value from selector
   */
  handleCategoryChange = (event: any) => {
    this.setState({ category: event.target.value })
  }

  /**
   * Function that handle onChange text in title textfield
   * @param event contain the title value from textField
   */
  handleTitleChange = (event: any) => {
    this.setState({ title: event.target.value })
  }

  /**
   * Function that handle onChange text in description text editor
   * @param html contain the description value from text editor
   */
  handleDescriptionChange = (html: any) => {
    this.setState({ description: html })
  }

  /**
   * Function that disable publish button when either category, decsription or title is empty
   */
  disablePublishButton() {
    const { category, description, title } = this.state
    return (category === '' || description === '' || title === '')
  }

  /**
   * Function to close snackbar after createArticle success
   */
  handleClose = () => {
    this.setState({ isSnackbarOpen: false })
  }

  /**
   * Function that call createArticle action to create new article
   */
  onCreateArticle = async () => {
    const { dispatch } = this.props
    const { title, category, description } = this.state
    const authorId = localStorage.getItem('id') || ''

    const newArticle = { title, category, description, authorId }
    await dispatch(actions.createArticle(newArticle))

    const { createArticleError } = this.props

    if (createArticleError === '') {
      this.setState({ isSnackbarOpen: true, category: '', description: '', title: '' })
      setTimeout(() => dispatch(push(HEADER_LINK.profile)), 750)
    }
  }

  /**
   * Function that render createArticle field
   */
  renderCreateArticleField = () => {
    const { title, category, description } = this.state
    const { categories } = this.props
    return (
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
            {map(categories, (category: Category) =>
              <MenuItem value={category.title} key={`selection-${category.title}`}>
                {startCase(category.title)}
              </MenuItem>
            )}
          </Select>
          <FormHelperText>{i18n.t('createArticle.required')}</FormHelperText>
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
      </Grid>
    )
  }

  /**
   * Function that render button container
   */
  renderButtonContainer = () => {
    const { createArticleError, isCreatingArticle, dispatch } = this.props
    return (
      <Grid container style={styles.buttonContainer}>
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10} >
          <Typography
            variant='body1'
            component='h2'
            color='textPrimary'
            style={styles.errorCreateLabel}
          >
            {createArticleError}
          </Typography>
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
    )
  }

  /**
   * Function that render user profile container
   */
  renderProfileContainer = () => {
    const { user } = this.props
    const initials = head(startCase(user.name))
    return (
      <Grid item md={6} xs={10} style={styles.profileContainer}>
        <Avatar style={styles.avatar}>{initials}</Avatar>
        <Grid style={styles.profile as any}>
          <Typography variant='subheading' style={styles.title}>
            {user.name}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {user.description}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {i18n.t('createArticle.draft')}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  /**
   * Render Create Article container
   */
  public render() {
    const { isSnackbarOpen } = this.state
    return (
      <Grid style={styles.container}>
        <Grid container>
          <Grid item md={3} xs={1} />
          {this.renderProfileContainer()}
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container>
          <Grid item md={3} xs={1} />
          {this.renderCreateArticleField()}
          <Grid item md={3} xs={1} />
        </Grid>
        {this.renderButtonContainer()}
        <SuccessSnackbar
          isSnackbarOpen={isSnackbarOpen}
          message={i18n.t('createArticle.createArticleSuccess')}
          handleClose={this.handleClose}
        />
      </Grid>
    )
  }
}

const ConnectedCreateArticle = connect(selector)(CreateArticle)

export default translate('translations')(ConnectedCreateArticle)