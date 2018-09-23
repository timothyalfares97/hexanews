/**
 * Unit tests for checking the behavior of NotFound container
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { NotFound } from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('Not Found', () => {

  it('renders Not Found component', () => {
    const component = renderer.create(
      <NotFound
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle button go to home click', () => {
    const dispatch = jest.fn()
    const component = (
      <NotFound
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#backHomeButton').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})