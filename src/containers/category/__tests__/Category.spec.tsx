import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import * as Adapter from 'enzyme-adapter-react-16'

import { Category } from '../Category'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticles: Article[] = [
  {
    _id: '1',
    title: 'abc',
    description: 'test',
    category: 'technology',
    authorId: 'test',
  },
]

describe('Category', () => {

  it('renders Category component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Category
          categoryArticles={mockArticles}
          categoryTitle='technology'
          dispatch={jest.fn()}
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})