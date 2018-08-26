import * as React from 'react'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { History } from 'history'

import styles from './styles'

type Props = {
  email: string,
  history: History,
}

interface ComponentState {
  name: string
}

class EditProfile extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleNameChange = (event: any) => {
    this.setState({ name: event.target.value })
  }

  public render() {
    const { history } = this.props
    const { name } = this.state
    return (
      <div style={styles.container}>
        <Typography
          variant='display1'
          component='h1'
          color='textPrimary'
        >
          {'Edit Profile'}
        </Typography>
        <div style={styles.textFieldContainer}>
          <TextField
            id='email'
            label='Email'
            value={'HillaryClinton@gmail.com'}
            disabled
            style={styles.textField}
            margin='normal'
          />
          <TextField
            id='name'
            label='Name'
            value={name}
            onChange={this.handleNameChange}
            style={styles.textField}
            margin='normal'
          />
        </div>
        <div>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            onClick={() => history.push('/profile')}
          >
            Save Profile
          </Button>
          <Button
            variant='outlined'
            size='small'
            component='button'
            style={styles.button}
            onClick={() => history.push('/profile')}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

export default EditProfile