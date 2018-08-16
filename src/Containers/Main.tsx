import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'

class Main extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    )
  }
}

export default Main
