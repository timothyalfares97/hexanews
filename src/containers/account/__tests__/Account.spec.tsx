import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import rootReducer from '../../../reducers'
import { Account } from '../Account'

const mockStore = configureStore([thunk])
Enzyme.configure({ adapter: new Adapter() })

describe('Account', () => {
  it('renders Account', () => {
    const store = mockStore(rootReducer(undefined as any, { type: '' }))
    const component = renderer.create(
      <Provider store={store}>
        <Account
        />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})