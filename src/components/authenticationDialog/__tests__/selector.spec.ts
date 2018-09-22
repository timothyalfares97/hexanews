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
      loginError: '',
      registerError: '',
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
          loginError: 'asdf',
          registerError: 'qwer',
        }
      },
      isLoggedIn: true,
    }

    expect(selector(state)).toMatchObject({
      isLoadingRegister: true,
      isLoadingLogin: true,
      loginError: 'asdf',
      registerError: 'qwer',
    })
  })
})