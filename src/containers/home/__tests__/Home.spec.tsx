/**
 * Unit tests for checking the behavior of Home container
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import * as Adapter from 'enzyme-adapter-react-16'

import { Home } from '../Home'

Enzyme.configure({ adapter: new Adapter() })

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

describe('Home', () => {

  it('renders Home component', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Home
          articles={[]}
          categories={[]}
          dispatch={jest.fn()}
          users={[mockUser]}
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})