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
import configureStore from './store/configureStore'
import Header from './components/header/Header'
import i18n from './i18n'
import registerServiceWorker from './registerServiceWorker'
import Routes from './routes'
import styles from './styles'
import { rehydrateState } from './actions/rehydrateState'

export default class Hexanews extends React.Component {

  history: History = createBrowserHistory()
  store: Store = configureStore({}, this.history)

  state = {
    isLoadingServer: true
  }

  async componentWillMount() {

    await rehydrateState(this.store)

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
