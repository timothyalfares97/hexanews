import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { History } from 'history'

import Home from '../containers/home/Home'
import Profile from '../containers/profile/Profile'
import PostDetail from '../containers/postDetail/PostDetail'
import CreatePost from '../containers/createPost/CreatePost'

type Props = {
  history: History
}

export default class Routes extends React.Component<Props> {
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
