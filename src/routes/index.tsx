/**
 * Handles routing for the main application.
 */

import * as React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Home from '../containers/home/Home'
import Profile from '../containers/profile/Profile'
import ArticleDetail from '../containers/articleDetail/ArticleDetail'
import SearchArticle from '../containers/searchArticle/SearchArticle'
import CreateArticle from '../containers/createArticle/CreateArticle'
import Category from '../containers/category/Category'
import Account from '../containers/account/Account'
import NotFound from '../containers/notFound/NotFound'
import selector, { StateProps } from './selector'
import PrivateRoute from './PrivateRoute'

type Props = {
  dispatch: Dispatch<any>
} & StateProps

class Routes extends React.Component<Props> {
  public render() {
    const { isLoggedIn } = this.props
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/articleDetail/:articleId' component={ArticleDetail}/>
        <Route path='/searchArticle' component={SearchArticle}/>
        <Route path='/category/:category' component={Category}/>
        <PrivateRoute isLoggedIn={isLoggedIn} path='/profile' component={Profile} />
        <PrivateRoute isLoggedIn={isLoggedIn} path='/account' component={Account}/>
        <PrivateRoute isLoggedIn={isLoggedIn} path='/createArticle' component={CreateArticle}/>
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default withRouter(connect(selector)(Routes) as any)
