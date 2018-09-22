/**
 * Unit tests for checking the behavior of PopularArticleRow components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import PopularArticleRow from '../PopularArticleRow'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticle: Article = {
  _id: '2',
  title: 'def',
  description: 'tester',
  category: 'tester',
  authorId: 'tester',
}

describe('Popular Article Row', () => {
  it('renders Popular Article Row', () => {
    const component = renderer.create(
      <PopularArticleRow
        article={mockArticle}
        authorName='tim'
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})