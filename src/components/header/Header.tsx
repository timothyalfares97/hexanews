/**
 * The Header Component that will be displayed in the top of application
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { translate } from 'react-i18next'
import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CreateIcon from '@material-ui/icons/Create'
import ExitIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import SearchIcon from '@material-ui/icons/Search'
import Select from '@material-ui/core/Select'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { HEXANEWS_TITLE } from '../../constants/config'
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
  isForgotPasswordSnackbarOpen: boolean
  isLoginSnackbarOpen: boolean
  isLogoutSnackbarOpen: boolean
  isRegisterSnackbarOpen: boolean
  language: string
  showDialog: boolean
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
      isForgotPasswordSnackbarOpen: false,
      isLoginSnackbarOpen: false,
      isLogoutSnackbarOpen: false,
      isRegisterSnackbarOpen: false,
      language: currentLanguage,
      showDialog: false,
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
   * Function to render all available header snackbar
   */
  renderAllHeaderSnackbar = () => {
    const {
      isForgotPasswordSnackbarOpen,
      isLoginSnackbarOpen,
      isLogoutSnackbarOpen,
      isRegisterSnackbarOpen,
    } = this.state
    return [
      <SuccessSnackbar
        key='logoutSnackbar'
        isSnackbarOpen={isLogoutSnackbarOpen}
        message={i18n.t('header.logoutSuccess')}
        handleClose={this.handleCloseLogoutSnackbar}
      />,
      <SuccessSnackbar
        key='loginSnackbar'
        isSnackbarOpen={isLoginSnackbarOpen}
        message={i18n.t('loginForm.loginSuccess')}
        handleClose={this.handleCloseLoginSnackbar}
      />,
      <SuccessSnackbar
        key='registerSnackbar'
        isSnackbarOpen={isRegisterSnackbarOpen}
        message={i18n.t('registerForm.registerSuccess')}
        handleClose={this.handleCloseRegisterSnackbar}
      />,
      <SuccessSnackbar
        key='forgotPasswordSnackbar'
        isSnackbarOpen={isForgotPasswordSnackbarOpen}
        message={i18n.t('forgotPasswordForm.forgotPasswordSuccess')}
        handleClose={this.handleCloseForgotPasswordSnackbar}
      />,
    ]
  }

  /**
   * Function to render right container header
   */
  renderRightContainer = () => {
    const { language } = this.state
    const { isLoggedIn, isLoadingServer, dispatch } = this.props
    return (
      <Grid style={styles.rightContainer as any}>
        {!isLoadingServer &&
          <Grid style={styles.innerRightContainer as any}>
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
          </Grid>
        }
      </Grid>
    )
  }

  /**
   * Render Header component
   */
  render() {
    const { showDialog } = this.state
    return (
      <Grid style={styles.root}>
        <AppBar position='static' style={styles.appBar}>
          <Toolbar>
            <Grid style={styles.leftContainer} />
            <Grid style={styles.titleContainer}>
              <Typography
                variant='display1'
                color='inherit'
                style={styles.titleTypography as any}
              >
                <Link to='/' style={styles.titleLink}>
                  {HEXANEWS_TITLE}
                </Link>
              </Typography>
            </Grid>
            {this.renderRightContainer()}
          </Toolbar>
        </AppBar>
        <AuthenticationDialog
          handleCloseDialog={this.handleCloseDialog}
          handleOpenForgotPasswordSnackbar={this.handleOpenForgotPasswordSnackbar}
          handleOpenLoginSnackbar={this.handleOpenLoginSnackbar}
          handleOpenRegisterSnackbar={this.handleOpenRegisterSnackbar}
          showDialog={showDialog}
        />
        {this.renderAllHeaderSnackbar()}
      </Grid>
    )
  }
}

const ConnectedHeader = connect(selector)(Header)

export default translate('translations')(ConnectedHeader)