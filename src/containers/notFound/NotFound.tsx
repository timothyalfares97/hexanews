/**
 * Not Found container contains the 404 page error for unknown route
 */

import * as React from 'react'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'

import styles from './styles'

type Props = {
  dispatch: Dispatch<any>
}

class NotFound extends React.Component<Props> {

  public render() {
    const { dispatch } = this.props
    return (
      <div style={styles.container as any}>
        <Typography
          variant='display1'
          component='h1'
          color='textPrimary'
          style={styles.errorLabel}
        >
          404
        </Typography>
        <Typography
          variant='body1'
          component='h1'
          color='textPrimary'
          style={styles.noPage}
        >
          There is no page here.
        </Typography>
        <Button
          variant='outlined'
          size='large'
          component='button'
          onClick={() => dispatch(push('/'))}
        >
          Back to home
        </Button>
      </div >
    )
  }
}

export default connect()(NotFound)
