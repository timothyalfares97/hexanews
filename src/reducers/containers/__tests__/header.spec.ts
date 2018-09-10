import { isLoadingLogin, isLoadingRegister, loginError } from '../header'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Header Reducer', () => {
  it('Default state and isLoadingLogin action', () => {
    const isLoadingLoginState = false
    expect(isLoadingLogin(isLoadingLoginState, {})).toBe(false)

    const isLoadingLoginAction = { type: ActionTypes.LOGIN_USER_REQUESTED }
    expect(isLoadingLogin(isLoadingLoginState, isLoadingLoginAction)).toBe(true)

    const isLoadingLoginAction2 = { type: ActionTypes.LOGIN_USER_SUCCESS }
    expect(isLoadingLogin(isLoadingLoginState, isLoadingLoginAction2)).toBe(false)

    const isLoadingLoginAction3 = { type: ActionTypes.LOGIN_USER_FAILED }
    expect(isLoadingLogin(isLoadingLoginState, isLoadingLoginAction3)).toBe(false)
  })

  it('Default state and loginError action', () => {
    const loginErrorState = ''
    expect(loginError(loginErrorState, {})).toBe('')

    const loginErrorAction = { type: ActionTypes.LOGIN_USER_FAILED, error: 'test' }
    expect(loginError(loginErrorState, loginErrorAction)).toBe('test')

    const loginErrorAction2 = { type: ActionTypes.LOGIN_USER_SUCCESS }
    expect(loginError(loginErrorState, loginErrorAction2)).toBe('')

    const loginErrorAction3 = { type: ActionTypes.LOGIN_USER_REQUESTED }
    expect(loginError(loginErrorState, loginErrorAction3)).toBe('')

    const loginErrorAction4 = { type: ActionTypes.LOGOUT }
    expect(loginError(loginErrorState, loginErrorAction4)).toBe('')
  })

  it('Default state and isLoadingRegister action', () => {
    const isLoadingRegisterState = false
    expect(isLoadingRegister(isLoadingRegisterState, {})).toBe(false)

    const isLoadingRegisterAction = { type: ActionTypes.REGISTER_USER_REQUESTED }
    expect(isLoadingRegister(isLoadingRegisterState, isLoadingRegisterAction)).toBe(true)

    const isLoadingRegisterAction2 = { type: ActionTypes.REGISTER_USER_SUCCESS }
    expect(isLoadingRegister(isLoadingRegisterState, isLoadingRegisterAction2)).toBe(false)

    const isLoadingRegisterAction3 = { type: ActionTypes.REGISTER_USER_FAILED }
    expect(isLoadingRegister(isLoadingRegisterState, isLoadingRegisterAction3)).toBe(false)
  })
})