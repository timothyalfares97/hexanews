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
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
const ReactQuill = require('react-quill')

import * as actions from './actions'
import styles from './styles'
import { createArticleString } from '../../constants/string'
import selector, { StateProps } from './selector'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

interface ComponentState {
  category: string
  description: string
  title: string
}

class CreateArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      category: '',
      description: '',
      title: '',
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

  onCreateArticle = async () => {
    const { dispatch } = this.props
    const { title, category, description } = this.state
    const authorId = localStorage.getItem('id') || ''

    const newArticle = { _id: '', title, category, description, authorId }
    await dispatch(actions.createArticle(newArticle))

    dispatch(push('/articleDetail'))
  }

  modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
      {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }

  formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

  public render() {
    const { dispatch } = this.props
    const { title, category, description } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <Avatar style={styles.avatar}>HC</Avatar>
          <div style={styles.profile as any}>
            <Typography variant='subheading' style={styles.title}>
              {'Hillary Clinton'}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {'A politician, writer and philanthropist.'}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {'Draft'}
            </Typography>
          </div>
        </div>
        <div>
          <form>
            <TextField
              id='title'
              label='Title'
              value={title}
              onChange={this.handleTitleChange}
              style={styles.textField}
              margin='normal'
            />
            <FormControl required style={styles.categoryTextField}>
              <InputLabel htmlFor='category-required'>Category</InputLabel>
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
              formats={this.formats}
              modules={this.modules}
              placeholder='Tell your story in here...'
              theme='snow'
              style={styles.descTextField}
            />
          </form>
        </div>
        <div style={styles.buttonContainer}>
          <Button
            variant='outlined'
            component='button'
            style={styles.button}
            onClick={this.onCreateArticle}
          >
            {createArticleString.publishButton}
          </Button>
          <Button
            variant='outlined'
            component='button'
            style={styles.button}
            onClick={() => dispatch(push('/'))}
          >
            {createArticleString.cancelButton}
          </Button>
        </div>
      </div>
    )
  }
}

export default connect(selector)(CreateArticle)