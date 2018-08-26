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
import { History } from 'history'
const ReactQuill = require('react-quill')

import styles from './styles'
import { Article } from '../../domain/model/Article'

type Props = {
  article: Article,
  history: History,
}

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
    const { history } = this.props
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
            onClick={() => history.push('/articleDetail')}
          >
            Publish
          </Button>
          <Button
            variant='outlined'
            component='button'
            style={styles.button}
            onClick={() => history.push('/')}
          >
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

export default CreateArticle