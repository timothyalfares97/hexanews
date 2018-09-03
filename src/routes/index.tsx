/**
 * Handles routing for the main application.
 */
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/home/Home'
import Profile from '../containers/profile/Profile'
import ArticleDetail from '../containers/articleDetail/ArticleDetail'
import SearchArticle from '../containers/searchArticle/SearchArticle'
import CreateArticle from '../containers/createArticle/CreateArticle'
import Categories from '../containers/categories/Categories'
import Category from '../containers/category/Category'
import Account from '../containers/account/Account'
import NotFound from '../containers/notFound/NotFound'

type Props = {
}

export default class Routes extends React.Component<Props> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/account' component={Account}/>
        <Route path='/articleDetail/:articleId' component={ArticleDetail}/>
        <Route path='/searchArticle' component={SearchArticle}/>
        <Route path='/createArticle' component={CreateArticle}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/category/:category' component={Category}/>
        <Route component={NotFound} />
      </Switch>
    )
  }
}
