import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import CategoryCard from '../CategoryCard'

Enzyme.configure({ adapter: new Adapter() })

describe('Category Card', () => {
  it('renders Category Card', () => {
    const component = renderer.create(
      <CategoryCard
        category='technology'
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle button go to category detail', () => {
    const dispatch = jest.fn()
    const component = (
      <CategoryCard
        category='technology'
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#category-technology').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})