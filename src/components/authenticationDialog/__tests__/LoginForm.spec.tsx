/**
 * Unit tests for checking the behavior of loginForm components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import LoginForm, { Props, ComponentState } from '../LoginForm'

Enzyme.configure({ adapter: new Adapter() })

describe('Login Form', () => {
  it('renders Login Form', () => {
    const component = renderer.create(
      <LoginForm
        dispatch={jest.fn()}
        onChangeForgotPassword={jest.fn()}
        onChangeAuthenticationState={jest.fn()}
        isLoadingLogin={false}
        loginError=''
        handleOpenLoginSnackbar={jest.fn()}
        handleCloseDialog={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle onLogin', async () => {
    const dispatch = jest.fn()
    const component = (
      <LoginForm
        dispatch={dispatch}
        onChangeForgotPassword={jest.fn()}
        onChangeAuthenticationState={jest.fn()}
        isLoadingLogin={false}
        loginError=''
        handleOpenLoginSnackbar={jest.fn()}
        handleCloseDialog={jest.fn()}
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: LoginForm = layout.instance() as LoginForm

    layout.setState({ email: 'a', password: 'b'})
    layout.update()

    const email = layout.state().email
    const password = layout.state().password
    expect(email).toBe('a')
    expect(password).toBe('b')

    await instance.onLogin()
    layout.update()

    const updatedEmail = layout.state().email
    const updatedPassword = layout.state().password
    expect(dispatch).toHaveBeenCalled()
    expect(updatedEmail).toBe('')
    expect(updatedPassword).toBe('')
  })
})