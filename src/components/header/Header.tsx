import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CreateIcon from '@material-ui/icons/Create'

import styles from './styles'

type Props = {
}

class Header extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <div style={styles.root}>
        <AppBar position='static' style={styles.appBar}>
          <Toolbar>
            <div style={styles.leftContainer}/>
            <div style={styles.titleContainer}>
              <Typography
                variant='display1'
                color='inherit'
                style={styles.titleTypography as any}
              >
                <Link to='/' style={styles.titleLink}>Hexanews</Link>
              </Typography>
            </div>
            <div style={styles.rightContainer as any}>
              <Typography
                variant='title'
                color='inherit'
                style={styles.profileTypography}
              >
                <Link to='/profile' style={styles.profileLink}>Profile</Link>
              </Typography>
              <IconButton
                style={styles.menuButton}
                color='default'
                aria-label='Create'
              >
                <Link to='/createPost' style={styles.createLink}><CreateIcon /></Link>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header