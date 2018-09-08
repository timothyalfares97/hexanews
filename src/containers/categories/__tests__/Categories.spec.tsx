import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import * as Adapter from 'enzyme-adapter-react-16'
import '../../../assets/placeholder.png'

import { Categories } from '../Categories'

Enzyme.configure({ adapter: new Adapter() })

describe('Categories', () => {

  it('renders Categories component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Categories
          dispatch={jest.fn()}
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})