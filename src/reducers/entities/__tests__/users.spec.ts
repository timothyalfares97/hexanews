import users from '../users'
import { ActionTypes } from '../../../actions/ActionTypes'
import { User } from '../../../domain/model/User'

describe('Users Reducer', () => {
  it('Default state and get users', () => {
    const initialUsersState: User[] = []
    expect(users(initialUsersState, {})).toBe(initialUsersState)

    const updatedUsersState = [{
      _id: '1',
      email: 'test@gmail.com',
      name: 'test',
      description: 'desc',
      createdAt: 'created',
    }]

    const usersAction = { type: ActionTypes.GET_USERS, users: updatedUsersState }
    expect(users(initialUsersState, usersAction)).toBe(updatedUsersState)
  })
})