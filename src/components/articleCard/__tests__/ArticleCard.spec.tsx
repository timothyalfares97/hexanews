import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import ArticleCard from '../ArticleCard'

Enzyme.configure({ adapter: new Adapter() })

describe('Article Card', () => {
  it('renders Article Card', () => {
    const component = renderer.create(
      <ArticleCard
        title='test'
        description='test'
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
        title='test'
        description='test'
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#article-test').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})