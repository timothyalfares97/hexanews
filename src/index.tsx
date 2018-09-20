/**
 * Entry point for the main application.
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory, History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import { I18nextProvider } from 'react-i18next'

import './index.css'
import { ActionTypes } from './actions/ActionTypes'
import ArticleRepository from './domain/repository/ArticleRepository'
import CategoryRepository from './domain/repository/CategoryRepository'
import configureStore from './store/configureStore'
import Header from './components/header/Header'
import i18n from './i18n'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'
import styles from './styles'
import UserRepository from './domain/repository/UserRepository'

export default class Hexanews extends React.Component {

  history: History = createBrowserHistory()
  store: Store = configureStore({}, this.history)

  state = {
    isLoadingServer: true
  }

  async componentWillMount() {
    const articles = await ArticleRepository.getAll()
    this.store.dispatch({ type: ActionTypes.GET_ARTICLES, articles: articles.data })

    const users = await UserRepository.getAll()
    this.store.dispatch({ type: ActionTypes.GET_USERS, users: users.data })

    const categories = await CategoryRepository.getAll()
    this.store.dispatch({ type: ActionTypes.GET_CATEGORIES, categories: categories.data })

    const isLoggedIn = await !!localStorage.getItem('token')
    this.store.dispatch({ type: ActionTypes.GET_LOGIN, isLoggedIn })

    const id = localStorage.getItem('id')
    if (id !== null) {
      const user = await UserRepository.get(id)
      this.store.dispatch({ type: ActionTypes.GET_USER, user: user.data })
    }

    const localLanguage = localStorage.getItem('language')
    const currentLanguage = localLanguage ? localLanguage : 'en'
    i18n.changeLanguage(currentLanguage)

    this.setState({ isLoadingServer: false })
  }

  renderMainContainer = () => (
    this.state.isLoadingServer ?
      <div style={styles.progressContainer}>
        <CircularProgress />
      </div> :
      <Routes />
  )

  render() {
    const { isLoadingServer } = this.state
    return (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Provider store={this.store}>
            <ConnectedRouter history={this.history}>
              <div>
                <Header isLoadingServer={isLoadingServer}/>
                {this.renderMainContainer()}
              </div>
            </ConnectedRouter>
          </Provider>
        </I18nextProvider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Hexanews />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
