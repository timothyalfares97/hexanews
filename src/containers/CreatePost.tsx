import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'

type Props = {
  post: Post
}

type Post = {
  title: string,
  input: string
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
    fontSize: 50,
  }
}

class CreatePost extends React.Component<Props> {

  public render() {
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
            value=''
            // style={styles.textField}
            // InputProps={{
            //   classes: {
            //     input: styles.textField,
            //   },
            // }}
            margin='normal'
          />
          </form>
        </div>
        <div>
          <TextField
            id='multiline-flexible'
            label='Body'
            multiline
            rowsMax='4'
            value=''
            margin='normal'
          />
        </div>
      </div>
    )
  }
}

export default CreatePost