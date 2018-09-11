import user from '../user'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('User Reducer', () => {
  it('Default state and get user', () => {
    const initialUserState = {
      _id: '',
      email: '',
      name: '',
      description: '',
      createdAt: '',
    }
    expect(user(initialUserState, {})).toEqual(initialUserState)

    const updatedUserState = {
      _id: '1',
      email: 'test@gmail.com',
      name: 'test',
      description: 'desc',
      createdAt: 'created',
    }

    const userAction = { type: ActionTypes.GET_USER, user: updatedUserState }
    expect(user(initialUserState, userAction)).toEqual(updatedUserState)

    const userAction2 = { type: ActionTypes.LOGIN_USER_SUCCESS, user: updatedUserState }
    expect(user(initialUserState, userAction2)).toEqual(updatedUserState)

    const userAction3 = { type: ActionTypes.EDIT_USER_SUCCESS, user: updatedUserState }
    expect(user(initialUserState, userAction3)).toEqual(updatedUserState)

    const userAction4 = { type: ActionTypes.LOGOUT }
    expect(user(initialUserState, userAction4)).toEqual(initialUserState)
  })
})