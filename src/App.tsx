import * as React from 'react'
import { History } from 'history'

import Header from './components/Header'
import Main from './containers/Main'

type Props = {
  history: History
}

export default class App extends React.Component<Props> {
  public render() {
    return (
      <div>
        <Header />
        <Main {...this.props}/>
      </div>
    )
  }
}
