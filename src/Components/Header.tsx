import * as React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
}

interface IProps {
}

class Header extends React.Component<IProps> {
  public render() {
    return (
      <div className={styles.root as any}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={styles.menuButton as any}
              color='inherit'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='title'
              color='inherit'
              className={styles.flex as any}
            >
              <ul>
                <li>
                  <Link to='/'>Hexanews</Link>
                </li>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
              </ul>
            </Typography>
            <Button color='inherit'>Login</Button>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <ul>
                <li>
                  <Link to="/">Hexanews</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header