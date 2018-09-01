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

import './index.css'
import Header from './components/header/Header'
import Routes from './routes'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import ArticleRepository from './domain/repository/ArticleRepository'
import { ActionTypes } from './actions/ActionTypes'

export default class Hexanews extends React.Component {

  history: History = createBrowserHistory()
  store: Store = configureStore({}, this.history)

  async componentWillMount() {
    const articles = await ArticleRepository.getAll()
    this.store.dispatch({ type: ActionTypes.GET_ARTICLES, articles: articles.data })
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={this.store}>
          <ConnectedRouter history={this.history}>
            <div>
              <Header/>
              <Routes/>
            </div>
          </ConnectedRouter>
        </Provider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Hexanews/>, document.getElementById('root') as HTMLElement)
registerServiceWorker()
