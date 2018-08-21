import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

type Props = {
  post: Post,
  history: History,
}

type Post = {
  title: string,
  description: string
}

interface ComponentState {
  title: string
  description: string
}

const styles = {
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  container: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '4%',
    paddingBottom: '5%'
  },
  profileContainer: {
    display: 'flex',
    marginBottom: '3%',
  },
  textField: {
    width: '100%',
    // fontSize: 50,
  },
  button: {
    marginTop: 30,
    marginRight: 10,
  }
}

class CreatePost extends React.Component<Props, ComponentState> {

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

  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value })
  }

  public render() {
    const { history } = this.props
    const { title } = this.state
    const { description } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <Avatar style={styles.avatar}>HC</Avatar>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subheading' style={{ marginTop: 12 }}>
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
              // InputProps={{
              //   classes: {
              //     input: styles.textField,
              //   },
              // }}
              margin='normal'
            />
            <TextField
              id='multiline-flexible'
              label='Description'
              multiline
              rowsMax='20'
              style={styles.textField}
              value={description}
              onChange={this.handleDescriptionChange}
              margin='normal'
            />
          </form>
        </div>
        <div>
          <Button variant='contained' component='button' style={styles.button}
            onClick={() => history.push('/postDetail')}>
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

export default CreatePost