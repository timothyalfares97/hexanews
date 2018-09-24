/**
 * The SuccessSnackBar Component for displaying snackbar every successful response
 */

import * as React from 'react'
import { Typography } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import styles from './styles'

/**
 * All props required by the components
 */
type Props = {
  handleClose: () => any,
  isSnackbarOpen: boolean,
  message: string,
}

/**
 * Render the SuccessSnackbar component
 */
const SuccessSnackbar: React.StatelessComponent<Props> = ({
  handleClose,
  isSnackbarOpen,
  message,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={isSnackbarOpen}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <SnackbarContent
        style={styles.successContainer}
        message={
          <Typography id='client-snackbar' style={styles.message}>
            <CheckCircleIcon style={styles.checkIcon} />
            {message}
          </Typography>
        }
      />
    </Snackbar>
  )
}

export default SuccessSnackbar