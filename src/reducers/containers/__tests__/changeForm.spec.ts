import { isChangingPassword } from '../changePasswordForm'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Account Reducer', () => {
  it('Default state and isChangingPassword action', () => {
    const isChangingPasswordState = false
    expect(isChangingPassword(isChangingPasswordState, {})).toBe(false)

    const isChangingPasswordAction = { type: ActionTypes.CHANGE_PASSWORD_REQUESTED }
    expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction)).toBe(true)

    const isChangingPasswordAction2 = { type: ActionTypes.CHANGE_PASSWORD_SUCCESS }
    expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction2)).toBe(false)

    const isChangingPasswordAction3 = { type: ActionTypes.CHANGE_PASSWORD_FAILED }
    expect(isChangingPassword(isChangingPasswordState, isChangingPasswordAction3)).toBe(false)
  })
})