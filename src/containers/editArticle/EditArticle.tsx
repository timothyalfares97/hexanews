/**
 * Display edit article container for editing article
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
import { NotFound } from '../notFound/NotFound'
import { TEXT_EDITOR, HEADER_LINK } from '../../constants/config'
import * as actions from './actions'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../../components/successSnackbar/SuccessSnackbar'

/**
 * All props required by the container
 */
type Props = {
  dispatch: Dispatch<any>
} & StateProps

/**
 * All state required by the container
 */
interface ComponentState {
  category: string
  description: string
  isEditSnackbarOpen: boolean
  title: string
}

export class EditArticle extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Edit Article container and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    const { userArticle } = this.props
    this.state = {
      category: userArticle.category ? userArticle.category : '',
      description: userArticle.description,
      isEditSnackbarOpen: false,
      title: userArticle.title,
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
   * Function that disable save button when either category, decsription or title is empty
   */
  disableSaveButton() {
    const { category, description, title } = this.state
    return (category === '' || description === '' || title === '')
  }

  /**
   * Function to close snackbar after editArticle success
   */
  handleEditClose = () => {
    this.setState({ isEditSnackbarOpen: false })
  }

  /**
   * Function that call editArticle action to edit article
   */
  onEditArticle = async () => {
    const { dispatch, userArticle } = this.props
    const { title, category, description } = this.state
    const articleId = userArticle._id
    const authorId = localStorage.getItem('id') || ''

    const edittedArticle = { _id: articleId, title, category, description, authorId }

    if (!!articleId) {
      await dispatch(actions.editArticle(edittedArticle))
    }

    const { editArticleError } = this.props

    if (editArticleError === '') {
      this.setState({ isEditSnackbarOpen: true })
      setTimeout(() => dispatch(push(HEADER_LINK.profile)), 500)
    }
  }

  /**
   * Function that render editArticle field
   */
  renderEditArticleField = () => {
    const { title, category, description } = this.state
    const { categories } = this.props
    return (
      <Grid item md={6} xs={10}>
        <TextField
          id='title'
          label={i18n.t('editArticle.title')}
          value={title}
          onChange={this.handleTitleChange}
          style={styles.textField}
          margin='normal'
        />
        <FormControl required style={styles.categoryTextField}>
          <InputLabel htmlFor='category-required'>{i18n.t('editArticle.category')}</InputLabel>
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
          <FormHelperText>{i18n.t('editArticle.required')}</FormHelperText>
        </FormControl>
        <ReactQuill
          value={description}
          onChange={this.handleDescriptionChange}
          formats={TEXT_EDITOR.formats}
          modules={TEXT_EDITOR.modules}
          placeholder={i18n.t('editArticle.descriptionPlaceholder')}
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
    const { editArticleError, isEditingArticle, dispatch } = this.props
    return (
      <Grid container style={styles.buttonContainer}>
        <Grid item md={3} xs={1} />
        <Grid item md={6} xs={10} >
          <Typography
            variant='body1'
            component='h2'
            color='textPrimary'
            style={styles.errorEditLabel}
          >
            {editArticleError}
          </Typography>
          <Button
            variant='outlined'
            component='button'
            style={styles.button}
            disabled={this.disableSaveButton()}
            onClick={this.onEditArticle}
          >
            {isEditingArticle ? <CircularProgress size={22} /> : i18n.t('editArticle.saveButton')}
          </Button>
          <Button
            id='cancelButton'
            variant='outlined'
            component='button'
            style={styles.button}
            onClick={() => dispatch(push('/'))}
          >
            {i18n.t('editArticle.cancelButton')}
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
            {i18n.t('editArticle.editing')}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  /**
   * Render Edit Article container
   */
  public render() {
    const { dispatch, isUserArticle } = this.props
    const { isEditSnackbarOpen } = this.state

    if (!isUserArticle) {
      return (
        <NotFound
          dispatch={dispatch}
        />
      )
    }

    return (
      <Grid style={styles.container}>
        <Grid container>
          <Grid item md={3} xs={1} />
          {this.renderProfileContainer()}
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container>
          <Grid item md={3} xs={1} />
          {this.renderEditArticleField()}
          <Grid item md={3} xs={1} />
        </Grid>
        {this.renderButtonContainer()}
        <SuccessSnackbar
          isSnackbarOpen={isEditSnackbarOpen}
          message={i18n.t('editArticle.editArticleSuccess')}
          handleClose={this.handleEditClose}
        />
      </Grid>
    )
  }

}

const ConnectedEditArticle = connect(selector)(EditArticle)

export default translate('translations')(ConnectedEditArticle)