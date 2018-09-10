import isLoggedIn from '../isLoggedIn'
import { ActionTypes } from '../../actions/ActionTypes'

describe('IsLoggedIn Reducer', () => {
  it('Default state and login user success and logout', () => {
    const isLoggedInState = false
    expect(isLoggedIn(isLoggedInState, {})).toBe(false)

    const isLoggedInAction = { type: ActionTypes.LOGIN_USER_SUCCESS }
    expect(isLoggedIn(isLoggedInState, isLoggedInAction)).toBe(true)

    const isLoggedInAction2 = { type: ActionTypes.LOGOUT }
    expect(isLoggedIn(isLoggedInState, isLoggedInAction2)).toBe(false)
  })

  it('Default state and getLogin', () => {
    const isLoggedInState = false
    expect(isLoggedIn(isLoggedInState, {})).toBe(false)

    const isLoggedInAction = { type: ActionTypes.GET_LOGIN, isLoggedIn: true }
    expect(isLoggedIn(isLoggedInState, isLoggedInAction)).toBe(true)

    const isLoggedInAction2 = { type: ActionTypes.GET_LOGIN, isLoggedIn: false }
    expect(isLoggedIn(isLoggedInState, isLoggedInAction2)).toBe(false)
  })
})