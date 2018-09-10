import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Header selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      isLoadingRegister: false,
      isLoadingLogin: false,
      loginError: '',
      isLoggedIn: false,
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      containers: {
        ...initialState.containers,
        header: {
          isLoadingLogin: true,
          isLoadingRegister: true,
          loginError: 'asdf',
        }
      },
      isLoggedIn: true,
    }

    expect(selector(state)).toMatchObject({
      isLoadingRegister: true,
      isLoadingLogin: true,
      loginError: 'asdf',
      isLoggedIn: true,
    })
  })
})