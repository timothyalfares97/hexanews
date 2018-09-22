/**
 * Display success snackbar row component.
 */

import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import styles from './styles'

type Props = {
  isSnackbarOpen: boolean,
  message: string,
  handleClose: () => any,
}

const SuccessSnackbar: React.StatelessComponent<Props> = ({
  isSnackbarOpen,
  message,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={isSnackbarOpen}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <SnackbarContent
        style={styles.successContainer}
        message={
          <span id='client-snackbar' style={styles.message}>
            <CheckCircleIcon style={styles.checkIcon} />
            {message}
          </span>
        }
      />
    </Snackbar>
  )
}

export default SuccessSnackbar