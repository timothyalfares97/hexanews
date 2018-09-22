/**
 * Unit tests for checking the behavior of SuccessSnackbar components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import SuccessSnackbar from '../SuccessSnackbar'

Enzyme.configure({ adapter: new Adapter() })

describe('Success snackbar Row', () => {
  it('renders Success snackbar Row', () => {
    const component = renderer.create(
      <SuccessSnackbar
        isSnackbarOpen={false}
        message='a'
        handleClose={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})