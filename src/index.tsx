import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory, History } from 'history'

import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

export default class Hexanews extends React.Component {

  history: History = createBrowserHistory()

  render() {
    return (
      <BrowserRouter>
        <App history={this.history}/>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Hexanews/>, document.getElementById('root') as HTMLElement)
registerServiceWorker()
