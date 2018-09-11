import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import * as Adapter from 'enzyme-adapter-react-16'

import { Home } from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('Home', () => {

  it('renders Home component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Home
          articles={[]}
          dispatch={jest.fn()}
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})