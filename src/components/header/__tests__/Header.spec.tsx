/**
 * Unit tests for checking the behavior of header components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import rootReducer from '../../../reducers'
import { Header, Props, ComponentState } from '../Header'

const mockStore = configureStore([thunk])

Enzyme.configure({ adapter: new Adapter() })

describe('Header', () => {
  it('renders Header', () => {
    const store = mockStore(rootReducer(undefined as any, { type: '' }))
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Header
            dispatch={jest.fn()}
            isLoadingServer={false}
            isLoggedIn={false}
          />
        </Provider>
      </BrowserRouter>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Header with isLoggedIn true', () => {
    const store = mockStore(rootReducer(undefined as any, { type: '' }))
    const component = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Header
            dispatch={jest.fn()}
            isLoadingServer={false}
            isLoggedIn={false}
          />
        </Provider>
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
        isLoggedIn={false}
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
        isLoggedIn={false}
      />
    )

    const layout = shallow(component)
    const instance: Header = layout.instance() as Header

    instance.onLogoutClick()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })
})