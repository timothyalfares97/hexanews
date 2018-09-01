/**
 * Display header component.
 */
import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import CreateIcon from '@material-ui/icons/Create'
import SearchIcon from '@material-ui/icons/Search'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as Config from '../../constants/config'
import styles from './styles'
import AuthenticationDialog from '../authenticationDialog/AuthenticationDialog'
import selector, { StateProps } from './selector'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

interface ComponentState {
  showDialog: boolean
}

class Header extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      showDialog: false,
    }
  }

  handleShowDialog = () => {
    this.setState({ showDialog: true })
  }

  handleCloseDialog = () => {
    this.setState({ showDialog: false })
  }

  public render() {
    const { showDialog } = this.state
    const { dispatch, isLoadingLogin, isLoadingRegister } = this.props
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
                <span style={styles.signLink} onClick={this.handleShowDialog}>Sign in</span>
              </Typography>
              <Typography
                variant='title'
                color='inherit'
                style={styles.profileTypography}
              >
                <Link to={Config.HEADER_LINK.profile} style={styles.profileLink}>Profile</Link>
              </Typography>
              <IconButton
                style={styles.menuButton}
                color='default'
                aria-label='Search'
              >
                <Link to={Config.HEADER_LINK.searchArticle} style={styles.createLink}><SearchIcon /></Link>
              </IconButton>
              <IconButton
                style={styles.menuButton}
                color='default'
                aria-label='Create'
              >
                <Link to={Config.HEADER_LINK.createArticle} style={styles.createLink}><CreateIcon /></Link>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <AuthenticationDialog
          dispatch={dispatch}
          showDialog={showDialog}
          handleCloseDialog={this.handleCloseDialog}
          isLoadingRegister={isLoadingRegister}
          isLoadingLogin={isLoadingLogin}
        />
      </div>
    )
  }
}

export default connect(selector)(Header)