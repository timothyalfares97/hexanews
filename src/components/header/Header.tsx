/**
 * Display header component.
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

import * as actions from './actions'
import * as Config from '../../constants/config'
import { translate } from 'react-i18next'
import AuthenticationDialog from '../authenticationDialog/AuthenticationDialog'
import i18n from '../../i18n'
import selector, { StateProps } from './selector'
import styles from './styles'

export type Props = {
  dispatch: Dispatch<any>,
  isLoadingServer: boolean,
} & StateProps

export interface ComponentState {
  language: string
  showDialog: boolean
}

export class Header extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    const language = localStorage.getItem('language')
    this.state = {
      language: language ? language : '',
      showDialog: false,
    }
  }

  handleLanguageChange = (event: any) => {
    this.setState({ language: event.target.value }, () => {
      i18n.changeLanguage(event.target.value)
      localStorage.setItem('language', event.target.value)
    })
  }

  onLogoutClick = async () => {
    const { dispatch } = this.props
    await dispatch(actions.logout())
  }

  handleShowDialog = () => {
    this.setState({ showDialog: true })
  }

  handleCloseDialog = () => {
    this.setState({ showDialog: false })
  }

  public render() {
    const { showDialog, language } = this.state
    const { dispatch, isLoadingLogin, isLoadingRegister, isLoggedIn, loginError, isLoadingServer } = this.props
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
              {!isLoadingServer &&
                <div style={styles.innerRightContainer as any}>
                  <Select
                    value={language}
                    onChange={this.handleLanguageChange}
                    name='language'
                    displayEmpty
                    style={{ marginRight: 16, marginTop: 8 }}
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
                  >
                    <Link to={Config.HEADER_LINK.searchArticle} style={styles.createLink}><SearchIcon /></Link>
                  </IconButton>
                  {isLoggedIn &&
                    <IconButton
                      style={styles.menuButton}
                      color='default'
                      aria-label='Create'
                    >
                      <Link to={Config.HEADER_LINK.createArticle} style={styles.createLink}><CreateIcon /></Link>
                    </IconButton>
                  }
                  {isLoggedIn &&
                    <IconButton
                      style={styles.menuButton}
                      color='default'
                      aria-label='Logout'
                      onClick={this.onLogoutClick}
                    >
                      <ExitIcon />
                    </IconButton>
                  }
                </div>
              }
            </div>
          </Toolbar>
        </AppBar>
        <AuthenticationDialog
          dispatch={dispatch}
          showDialog={showDialog}
          handleCloseDialog={this.handleCloseDialog}
          isLoadingRegister={isLoadingRegister}
          isLoadingLogin={isLoadingLogin}
          loginError={loginError}
        />
      </div>
    )
  }
}

const ConnectedHeader = connect(selector)(Header)

export default translate('translations')(ConnectedHeader)