import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'

import CategoryHeader from '../CategoryHeader'

Enzyme.configure({ adapter: new Adapter() })

describe('Category Header', () => {
  it('renders Category Header', () => {
    const component = renderer.create(
      <BrowserRouter>
        <CategoryHeader
          categories={[]}
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})