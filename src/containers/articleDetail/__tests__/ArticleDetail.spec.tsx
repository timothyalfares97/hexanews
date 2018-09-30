/**
 * Unit tests for checking the behavior of ArticleDetail container
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { createBrowserHistory, History } from 'history'
import { omit } from 'lodash'

import { ArticleDetail } from '../ArticleDetail'
import { Article } from '../../../domain/model/Article'
import { Router } from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

const mockArticle: Article = {
  _id: '2',
  title: 'def',
  description: 'tester',
  category: 'tester',
  authorId: 'tester',
}

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

const history: History = createBrowserHistory()

describe('Article Detail', () => {
  it('renders Article Detail', () => {
    const component = renderer.create(
      <Router history={history}>
        <ArticleDetail
          authorName='test'
          articles={[mockArticle]}
          users={[mockUser]}
          userArticle={mockArticle}
          isDeletingArticle={false}
          isUserArticle={true}
          footerArticles={[mockArticle]}
          dispatch={jest.fn()}
        />
      </Router>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Article Detail with isDeletingArticle to be true', () => {
    const component = renderer.create(
      <Router history={history}>
        <ArticleDetail
          articles={[mockArticle]}
          users={[mockUser]}
          userArticle={mockArticle}
          isDeletingArticle={true}
          isUserArticle={true}
          footerArticles={[mockArticle]}
          authorName='test'
          dispatch={jest.fn()}
        />
      </Router>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle onDeleteArticle action correctly', () => {
    jest.useFakeTimers()
    const articleWithoutId = omit(mockArticle, ['_id'])
    const dispatch = jest.fn()
    const component = (
      <ArticleDetail
        articles={[mockArticle]}
        users={[mockUser]}
        userArticle={articleWithoutId}
        isDeletingArticle={false}
        isUserArticle={true}
        footerArticles={[mockArticle]}
        authorName='test'
        dispatch={dispatch}
      />
    )

    const layout = shallow(component)
    const instance: ArticleDetail = layout.instance() as ArticleDetail

    instance.onDeleteArticle()
    layout.update()

    expect(dispatch).not.toHaveBeenCalled()
  })
})