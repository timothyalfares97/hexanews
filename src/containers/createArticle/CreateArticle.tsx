import * as React from 'react'
const ReactQuill = require('react-quill')
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import styles from './styles'

type Props = {
  article: Article,
  history: History,
}

type Article = {
  title: string,
  description: string
}

interface ComponentState {
  title: string
  description: string
}

class CreateArticle extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
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
    const { title } = this.state
    const { description } = this.state
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
        <div>
          <Button variant='contained' component='button' style={styles.button}
            onClick={() => history.push('/articleDetail')}>
            Publish
          </Button>
          <Button variant='contained' component='button' style={styles.button}
            onClick={() => history.push('/')}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

export default CreateArticle