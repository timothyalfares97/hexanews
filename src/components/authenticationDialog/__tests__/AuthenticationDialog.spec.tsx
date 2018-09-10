import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import AuthenticationDialog, { ComponentState, Props } from '../AuthenticationDialog'

Enzyme.configure({ adapter: new Adapter() })

describe('Authentication Dialog', () => {
  it('renders Authentication Dialog', () => {
    const component = renderer.create(
      <AuthenticationDialog
        dispatch={jest.fn()}
        isLoadingLogin={false}
        isLoadingRegister={false}
        loginError=''
        handleCloseDialog={jest.fn()}
        showDialog={false}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Authentication Dialog with register', () => {
    const component = renderer.create(
      <AuthenticationDialog
        dispatch={jest.fn()}
        isLoadingLogin={false}
        isLoadingRegister={false}
        loginError=''
        handleCloseDialog={jest.fn()}
        showDialog={false}
      />
    )
    component.root.instance.setState({ authenticationState: 'register' })
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Authentication Dialog fallback', () => {
    const component = renderer.create(
      <AuthenticationDialog
        dispatch={jest.fn()}
        isLoadingLogin={false}
        isLoadingRegister={false}
        loginError=''
        handleCloseDialog={jest.fn()}
        showDialog={false}
      />
    )
    component.root.instance.setState({ authenticationState: '' })
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Authentication Dialog with forgotPassword', () => {
    const component = renderer.create(
      <AuthenticationDialog
        dispatch={jest.fn()}
        isLoadingLogin={false}
        isLoadingRegister={false}
        loginError=''
        handleCloseDialog={jest.fn()}
        showDialog={false}
      />
    )
    component.root.instance.setState({ authenticationState: 'forgotPassword' })
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle onChangeAuthenticationState', () => {
    const component = (
      <AuthenticationDialog
        dispatch={jest.fn()}
        isLoadingLogin={false}
        isLoadingRegister={false}
        loginError=''
        handleCloseDialog={jest.fn()}
        showDialog={false}
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: AuthenticationDialog = layout.instance() as AuthenticationDialog

    const authenticationState = layout.state().authenticationState
    expect(authenticationState).toBe('login')

    instance.onChangeAuthenticationState('register')
    layout.update()

    const updatedAuthenticationState = layout.state().authenticationState
    expect(updatedAuthenticationState).toBe('register')
  })
})