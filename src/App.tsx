import * as React from 'react'
import Header from './components/Header'
import Main from './containers/Main'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

export default App
