import { isEditingUser } from '../account'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Account Reducer', () => {
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

  // it('Default state and isChangingPassword action', () => {
  //   const isChangingPasswordState = false
  //   expect(isChangingPassword(isChangingPasswordState, {})).toBe(false)

  //   const isChangingPasswordAction = { type: ActionTypes.CHANGE_PASSWORD_REQUESTED }
  //   expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction)).toBe(true)

  //   const isChangingPasswordAction2 = { type: ActionTypes.CHANGE_PASSWORD_SUCCESS }
  //   expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction2)).toBe(false)

  //   const isChangingPasswordAction3 = { type: ActionTypes.CHANGE_PASSWORD_FAILED }
  //   expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction3)).toBe(false)
  // })
})