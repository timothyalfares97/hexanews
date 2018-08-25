import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { History } from 'history'

import Home from '../containers/home/Home'
import Profile from '../containers/profile/Profile'
import ArticleDetail from '../containers/articleDetail/ArticleDetail'
import SearchArticle from '../containers/searchArticle/SearchArticle'
import CreateArticle from '../containers/createArticle/CreateArticle'
import Categories from '../containers/categories/Categories'
import Category from '../containers/category/Category'
import EditProfile from '../containers/editProfile/EditProfile'

type Props = {
  history: History
}

export default class Routes extends React.Component<Props> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} {...this.props}/>
        <Route path='/profile' component={Profile} {...this.props} />
        <Route path='/editProfile' component={EditProfile} {...this.props} />
        <Route path='/articleDetail' component={ArticleDetail} {...this.props} />
        <Route path='/searchArticle' component={SearchArticle} {...this.props} />
        <Route path='/createArticle' component={CreateArticle} {...this.props} />
        <Route path='/categories' component={Categories} {...this.props} />
        <Route path='/category/:category' component={Category} {...this.props} />

        {/* to be deleted */}
        {/* <Route path='/category' component={Category} {...this.props} /> */}
      </Switch>
    )
  }
}
