/**
 * Unit tests for checking the selector of header components
 */

import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Header selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      isLoggedIn: false,
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      isLoggedIn: true,
    }

    expect(selector(state)).toMatchObject({
      isLoggedIn: true,
    })
  })
})