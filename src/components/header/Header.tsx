/**
 * The Header Component that will be displayed in the top of application
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import CreateIcon from '@material-ui/icons/Create'
import Select from '@material-ui/core/Select'
import SearchIcon from '@material-ui/icons/Search'
import ExitIcon from '@material-ui/icons/ExitToApp'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { translate } from 'react-i18next'
import { push } from 'connected-react-router'

import * as actions from './actions'
import * as Config from '../../constants/config'
import AuthenticationDialog from '../authenticationDialog/AuthenticationDialog'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'
import SuccessSnackbar from '../successSnackbar/SuccessSnackbar'

/**
 * All props required by the components
 */
export type Props = {
  dispatch: Dispatch<any>,
  isLoadingServer: boolean,
} & StateProps

/**
 * All state required by the components
 */
export interface ComponentState {
  language: string
  showDialog: boolean
  isLogoutSnackbarOpen: boolean
  isLoginSnackbarOpen: boolean
  isRegisterSnackbarOpen: boolean
  isForgotPasswordSnackbarOpen: boolean
}

export class Header extends React.Component<Props, ComponentState> {

  /**
   * Main constructor for Header and initialize state
   * @param props props required in the components
   */
  constructor(props: Props) {
    super(props)
    const localLanguage = localStorage.getItem('language')
    const currentLanguage = localLanguage !== null ? localLanguage : 'en'
    this.state = {
      language: currentLanguage,
      showDialog: false,
      isLogoutSnackbarOpen: false,
      isLoginSnackbarOpen: false,
      isRegisterSnackbarOpen: false,
      isForgotPasswordSnackbarOpen: false,
    }
  }

  /**
   * Function that handle onChangeSelection language and put into localStorage
   * @param event contain the language value from textField
   */
  handleLanguageChange = (event: any) => {
    this.setState({ language: event.target.value }, () => {
      i18n.changeLanguage(event.target.value)
      localStorage.setItem('language', event.target.value)
    })
  }

  /**
   * Function that will dispatch an action to logout the current user1
   */
  onLogoutClick = async () => {
    const { dispatch } = this.props
    await dispatch(actions.logout())

    this.setState({ isLogoutSnackbarOpen: true })
  }

  /**
   * Function to show authentication dialog
   */
  handleShowDialog = () => {
    this.setState({ showDialog: true })
  }

  /**
   * Function to close authentication dialog
   */
  handleCloseDialog = () => {
    this.setState({ showDialog: false })
  }

  /**
   * Function to close logout snackbar
   */
  handleCloseLogoutSnackbar = () => {
    this.setState({ isLogoutSnackbarOpen: false })
  }

  /**
   * Function to open login snackbar
   */
  handleOpenLoginSnackbar = () => {
    this.setState({ isLoginSnackbarOpen: true })
  }

  /**
   * Function to close login snackbar
   */
  handleCloseLoginSnackbar = () => {
    this.setState({ isLoginSnackbarOpen: false })
  }

  /**
   * Function to open register snackbar
   */
  handleOpenRegisterSnackbar = () => {
    this.setState({ isRegisterSnackbarOpen: true })
  }

  /**
   * Function to close register snackbar
   */
  handleCloseRegisterSnackbar = () => {
    this.setState({ isRegisterSnackbarOpen: false })
  }

  /**
   * Function to open forgot password snackbar
   */
  handleOpenForgotPasswordSnackbar = () => {
    this.setState({ isForgotPasswordSnackbarOpen: true })
  }

  /**
   * Function to close forgot password snackbar
   */
  handleCloseForgotPasswordSnackbar = () => {
    this.setState({ isForgotPasswordSnackbarOpen: false })
  }

  /**
   * Render Header component
   */
  render() {
    const { showDialog, language, isLogoutSnackbarOpen, isLoginSnackbarOpen, isRegisterSnackbarOpen, isForgotPasswordSnackbarOpen } = this.state
    const { isLoggedIn, isLoadingServer, dispatch } = this.props
    return (
      <div style={styles.root}>
        <AppBar position='static' style={styles.appBar}>
          <Toolbar>
            <div style={styles.leftContainer} />
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
              {!isLoadingServer &&
                <div style={styles.innerRightContainer as any}>
                  <Select
                    value={language}
                    onChange={this.handleLanguageChange}
                    name='language'
                    displayEmpty
                    style={styles.languageSelection}
                    disableUnderline
                  >
                    <MenuItem value='en'>EN</MenuItem>
                    <MenuItem value='id'>ID</MenuItem>
                  </Select>
                  {!isLoggedIn &&
                    <Typography
                      variant='title'
                      color='inherit'
                      style={styles.profileTypography}
                    >
                      <span style={styles.signLink} onClick={this.handleShowDialog}>{i18n.t('header.signIn')}</span>
                    </Typography>
                  }
                  {isLoggedIn &&
                    <Typography
                      variant='title'
                      color='inherit'
                      style={styles.profileTypography}
                    >
                      <Link to={Config.HEADER_LINK.profile} style={styles.profileLink}>{i18n.t('header.profile')}</Link>
                    </Typography>
                  }
                  <IconButton
                    style={styles.menuButton}
                    color='default'
                    aria-label='Search'
                    onClick={() => dispatch(push(Config.HEADER_LINK.searchArticle))}
                  >
                    <SearchIcon style={styles.blackIcon} />
                  </IconButton>
                  {isLoggedIn &&
                    <IconButton
                      style={styles.menuButton}
                      color='default'
                      aria-label='Create'
                      onClick={() => dispatch(push(Config.HEADER_LINK.createArticle))}
                    >
                      <CreateIcon style={styles.blackIcon} />
                    </IconButton>
                  }
                  {isLoggedIn &&
                    <IconButton
                      style={styles.menuButton}
                      color='default'
                      aria-label='Logout'
                      onClick={this.onLogoutClick}
                    >
                      <ExitIcon style={styles.blackIcon} />
                    </IconButton>
                  }
                </div>
              }
            </div>
          </Toolbar>
        </AppBar>
        <AuthenticationDialog
          showDialog={showDialog}
          handleCloseDialog={this.handleCloseDialog}
          handleOpenLoginSnackbar={this.handleOpenLoginSnackbar}
          handleOpenRegisterSnackbar={this.handleOpenRegisterSnackbar}
          handleOpenForgotPasswordSnackbar={this.handleOpenForgotPasswordSnackbar}
        />
        <SuccessSnackbar
          isSnackbarOpen={isLogoutSnackbarOpen}
          message={i18n.t('header.logoutSuccess')}
          handleClose={this.handleCloseLogoutSnackbar}
        />
        <SuccessSnackbar
          isSnackbarOpen={isLoginSnackbarOpen}
          message={i18n.t('loginForm.loginSuccess')}
          handleClose={this.handleCloseLoginSnackbar}
        />
        <SuccessSnackbar
          isSnackbarOpen={isLoginSnackbarOpen}
          message={i18n.t('loginForm.loginSuccess')}
          handleClose={this.handleCloseLoginSnackbar}
        />
        <SuccessSnackbar
          isSnackbarOpen={isRegisterSnackbarOpen}
          message={i18n.t('registerForm.registerSuccess')}
          handleClose={this.handleCloseRegisterSnackbar}
        />
        <SuccessSnackbar
          isSnackbarOpen={isForgotPasswordSnackbarOpen}
          message={i18n.t('forgotPasswordForm.forgotPasswordSuccess')}
          handleClose={this.handleCloseForgotPasswordSnackbar}
        />
      </div>
    )
  }
}

const ConnectedHeader = connect(selector)(Header)

export default translate('translations')(ConnectedHeader)