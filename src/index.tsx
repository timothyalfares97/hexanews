import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory, History } from 'history'

import './index.css'
import Header from './components/header/Header'
import CategoryHeader from './components/categoryHeader/CategoryHeader'
import Main from './containers/main/Main'
import registerServiceWorker from './registerServiceWorker'

export default class Hexanews extends React.Component {

  history: History = createBrowserHistory()

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <CategoryHeader />
          <Main history={this.history}/>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Hexanews/>, document.getElementById('root') as HTMLElement)
registerServiceWorker()
