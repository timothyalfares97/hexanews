/**
 * Unit tests for checking the behavior of Forgot Password Form components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import ForgotPasswordForm from '../ForgotPasswordForm'

Enzyme.configure({ adapter: new Adapter() })

describe('Forgot Password Form', () => {
  it('renders Forgot Password Form', () => {
    const component = renderer.create(
      <ForgotPasswordForm
        dispatch={jest.fn()}
        onChangeAuthenticationState={jest.fn()}
        isLoadingForgotPassword={false}
        forgotPasswordError=''
        handleOpenForgotPasswordSnackbar={jest.fn()}
        handleCloseDialog={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})