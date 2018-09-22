/**
 * Edit Article container for users to edit their article
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
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { head, startCase } from 'lodash'
const ReactQuill = require('react-quill')

import * as actions from './actions'
import { NotFound } from '../notFound/NotFound'
import { TEXT_EDITOR } from '../../constants/config'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../../components/successSnackbar/SuccessSnackbar'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

interface ComponentState {
  category: string
  description: string
  title: string
  isEditSnackbarOpen: boolean
}

export class EditArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    const { userArticle } = this.props
    this.state = {
      category: userArticle.category ? userArticle.category : '',
      description: userArticle.description,
      title: userArticle.title,
      isEditSnackbarOpen: false,
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

  disableSaveButton() {
    const { category, description, title } = this.state
    return (category === '' || description === '' || title === '')
  }

  handleEditClose = () => {
    this.setState({ isEditSnackbarOpen: false })
  }

  onEditArticle = async () => {
    const { dispatch, userArticle } = this.props
    const { title, category, description } = this.state
    const articleId = userArticle._id
    const authorId = localStorage.getItem('id') || ''

    const edittedArticle = { title, category, description, authorId }

    if (!!articleId) {
      await dispatch(actions.editArticle(articleId, edittedArticle))
      this.setState({ isEditSnackbarOpen: true })
      setTimeout(() => dispatch(push('/profile')), 500)
    }
  }

  public render() {
    const { dispatch, user, isUserArticle, isEditingArticle } = this.props
    const { title, category, description, isEditSnackbarOpen } = this.state
    const initials = head(startCase(user.name))
    if (!isUserArticle) {
      return (
        <NotFound
          dispatch={dispatch}
        />
      )
    }

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
                {i18n.t('editArticle.editing')}
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
          <Grid item md={3} xs={1} />
        </Grid>
        <Grid container style={styles.buttonContainer}>
          <Grid item md={3} xs={1} />
          <Grid item md={6} xs={10} >
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
        <SuccessSnackbar
          isSnackbarOpen={isEditSnackbarOpen}
          message={i18n.t('editArticle.editArticleSuccess')}
          handleClose={this.handleEditClose}
        />
      </div>
    )
    }

}

const ConnectedEditArticle = connect(selector)(EditArticle)

export default translate('translations')(ConnectedEditArticle)