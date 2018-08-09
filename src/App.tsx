import * as React from 'react'
import Header from './Components/Header'
import Main from './Containers/Main'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
