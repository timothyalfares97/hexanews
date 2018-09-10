import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'

import { Header, Props, ComponentState } from '../Header'

Enzyme.configure({ adapter: new Adapter() })

describe('Header', () => {
  it('renders Header', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Header
          dispatch={jest.fn()}
          isLoadingServer={false}
          isLoadingLogin={false}
          isLoadingRegister={false}
          isLoggedIn={false}
          loginError=''
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Header with isLoggedIn true', () => {
    const component = renderer.create(
      <BrowserRouter>
        <Header
          dispatch={jest.fn()}
          isLoadingServer={false}
          isLoadingLogin={false}
          isLoadingRegister={false}
          isLoggedIn={true}
          loginError=''
        />
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle handleShowDialog and handleCloseDialog Change', () => {
    const dispatch = jest.fn()
    const component = (
      <Header
        dispatch={dispatch}
        isLoadingServer={false}
        isLoadingLogin={false}
        isLoadingRegister={false}
        isLoggedIn={false}
        loginError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: Header = layout.instance() as Header

    const showDialog = layout.state().showDialog
    expect(showDialog).toBe(false)

    instance.handleShowDialog()
    layout.update()

    const updatedShowDialog = layout.state().showDialog
    expect(updatedShowDialog).toBe(true)

    instance.handleCloseDialog()
    layout.update()

    const updatedShowDialog2 = layout.state().showDialog
    expect(updatedShowDialog2).toBe(false)
  })

  it('handle logout action correctly', () => {
    const dispatch = jest.fn()
    const component = (
      <Header
        dispatch={dispatch}
        isLoadingServer={false}
        isLoadingLogin={false}
        isLoadingRegister={false}
        isLoggedIn={false}
        loginError=''
      />
    )

    const layout = shallow(component)
    const instance: Header = layout.instance() as Header

    instance.onLogoutClick()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })
})