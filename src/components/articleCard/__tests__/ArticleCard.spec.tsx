import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import ArticleCard from '../ArticleCard'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticle: Article = {
  _id: '2',
  title: 'def',
  description: 'tester',
  category: 'tester',
  authorId: 'tester',
}

describe('Article Card', () => {
  it('renders Article Card', () => {
    const component = renderer.create(
      <ArticleCard
        article={mockArticle}
        authorName='tim'
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle button go to article detail', () => {
    const dispatch = jest.fn()
    const component = (
      <ArticleCard
        article={mockArticle}
        authorName='tim'
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#article-def').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})