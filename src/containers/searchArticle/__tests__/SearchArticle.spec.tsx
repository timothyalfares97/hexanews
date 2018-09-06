import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { SearchArticle, Props, ComponentState } from '../SearchArticle'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticles: Article[] = [
  {
    _id: '1',
    title: 'abc',
    description: 'test',
    category: 'test',
    authorId: 'test',
  },
  {
    _id: '2',
    title: 'def',
    description: 'tester',
    category: 'tester',
    authorId: 'tester',
  }
]

describe('Search Article', () => {
  it('renders Search Articles with zero articles', () => {
    const component = renderer.create(
      <SearchArticle
        articles={[]}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Search Articles with two articles', () => {
    const component = renderer.create(
      <SearchArticle
        articles={mockArticles}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle handleQueryChange action correctly', () => {
    const component = (
      <SearchArticle
        articles={mockArticles}
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: SearchArticle = layout.instance() as SearchArticle

    const queryState = layout.state().query
    expect(queryState).toBe('')

    const event = {
      target: {
        value: 'asdf'
      }
    }
    instance.handleQueryChange(event)
    layout.update()

    const updatedQueryState = layout.state().query
    expect(updatedQueryState).toBe('asdf')
  })

  it('handle getFilteredArticles action correctly', () => {
    const component = (
      <SearchArticle
        articles={mockArticles}
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: SearchArticle = layout.instance() as SearchArticle

    const initialArticles = instance.getFilteredArticles()
    expect(initialArticles).toEqual(mockArticles)

    layout.setState({ query: 'a' })
    layout.update()

    const updatedArticles = instance.getFilteredArticles()
    expect(updatedArticles).toEqual([mockArticles[0]])

    layout.setState({ query: 'd' })
    layout.update()

    const updatedArticles2 = instance.getFilteredArticles()
    expect(updatedArticles2).toEqual([mockArticles[1]])
  })
})