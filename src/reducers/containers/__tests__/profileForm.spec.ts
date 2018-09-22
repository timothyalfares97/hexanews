/**
 * Unit tests for checking the behavior of profileForm container based on relevant actions
 */

import { isEditingUser } from '../profileForm'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Profile Form Reducer', () => {
  it('Default state and isEditingUser action', () => {
    const isEditingUserState = false
    expect(isEditingUser(isEditingUserState, {})).toBe(false)

    const isEditingUserAction = { type: ActionTypes.EDIT_USER_REQUESTED }
    expect(isEditingUser(isEditingUserState, isEditingUserAction)).toBe(true)

    const isEditingUserAction2 = { type: ActionTypes.EDIT_USER_SUCCESS }
    expect(isEditingUser(isEditingUserState, isEditingUserAction2)).toBe(false)

    const isEditingUserAction3 = { type: ActionTypes.EDIT_USER_FAILED }
    expect(isEditingUser(isEditingUserState, isEditingUserAction3)).toBe(false)
  })
})