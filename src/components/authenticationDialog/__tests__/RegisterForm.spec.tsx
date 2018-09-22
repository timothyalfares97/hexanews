/**
 * Unit tests for checking the behavior of registerForm components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import RegisterForm, { Props, ComponentState } from '../RegisterForm'

Enzyme.configure({ adapter: new Adapter() })

describe('Register Form', () => {
  it('renders Register Form', () => {
    const component = renderer.create(
      <RegisterForm
        dispatch={jest.fn()}
        onChangeAuthenticationState={jest.fn()}
        isLoadingRegister={false}
        handleCloseDialog={jest.fn()}
        handleOpenRegisterSnackbar={jest.fn()}
        registerError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle onRegister', () => {
    const dispatch = jest.fn()
    const component = (
      <RegisterForm
        dispatch={dispatch}
        onChangeAuthenticationState={jest.fn()}
        isLoadingRegister={false}
        handleCloseDialog={jest.fn()}
        handleOpenRegisterSnackbar={jest.fn()}
        registerError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: RegisterForm = layout.instance() as RegisterForm

    instance.onRegister()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })
})