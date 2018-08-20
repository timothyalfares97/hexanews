import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { History } from 'history'

import Home from './Home'
import Profile from './Profile'
import PostDetail from './PostDetail'
import CreatePost from './CreatePost'

type Props = {
  history: History
}

class Main extends React.Component<Props> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} {...this.props}/>
        <Route path='/profile' component={Profile} {...this.props} />
        <Route path='/postDetail' component={PostDetail} {...this.props} />
        <Route path='/createPost' component={CreatePost} {...this.props} />
      </Switch>
    )
  }
}

export default Main
