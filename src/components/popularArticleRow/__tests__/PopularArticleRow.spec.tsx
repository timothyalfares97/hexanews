import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'

import PopularArticleRow from '../PopularArticleRow'

Enzyme.configure({ adapter: new Adapter() })

describe('Popular Article Row', () => {
  it('renders Popular Article Row', () => {
    const component = renderer.create(
      <BrowserRouter>
        <PopularArticleRow
          author='test'
          title='title'
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})