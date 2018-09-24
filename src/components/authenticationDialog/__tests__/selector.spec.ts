/**
 * Unit tests for checking the behavior of selector for authenticationDialog
 */

import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Authentication Dialog selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      isLoadingRegister: false,
      isLoadingLogin: false,
      isLoadingForgotPassword: false,
      loginError: '',
      registerError: '',
      forgotPasswordError: '',
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      containers: {
        ...initialState.containers,
        authenticationDialog: {
          isLoadingLogin: true,
          isLoadingRegister: true,
          isLoadingForgotPassword: true,
          loginError: 'asdf',
          registerError: 'qwer',
          forgotPasswordError: 'zxcv',
        }
      },
      isLoggedIn: true,
    }

    expect(selector(state)).toMatchObject({
      isLoadingRegister: true,
      isLoadingLogin: true,
      isLoadingForgotPassword: true,
      loginError: 'asdf',
      registerError: 'qwer',
      forgotPasswordError: 'zxcv',
    })
  })
})