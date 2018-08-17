import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { History } from 'history'

import Home from './Home'
import Profile from './Profile'
import PostDetail from './PostDetail'

type Props = {
  history: History
}

class Main extends React.Component<Props> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} {...this.props.history}/>
        <Route path='/profile' component={Profile} {...this.props.history} />
        <Route path='/postDetail' component={PostDetail} {...this.props.history} />
      </Switch>
    )
  }
}

export default Main
