import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import { ChangePasswordForm, Props, ComponentState } from '../ChangePasswordForm'

jest.mock('react-quill')
Enzyme.configure({ adapter: new Adapter() })

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

describe('Change Password Form', () => {
  it('renders Change Password Form', () => {
    const component = renderer.create(
      <ChangePasswordForm
        user={mockUser}
        dispatch={jest.fn()}
        isChangingPassword={false}
        changePasswordError='test'
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Change Password with isChangingPassword as true', () => {
    const component = renderer.create(
      <ChangePasswordForm
        user={mockUser}
        dispatch={jest.fn()}
        isChangingPassword={true}
        changePasswordError='test'
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle handleCurrentPassword Change', () => {
    const component = (
      <ChangePasswordForm
        user={mockUser}
        dispatch={jest.fn()}
        isChangingPassword={true}
        changePasswordError='test'
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: ChangePasswordForm = layout.instance() as ChangePasswordForm

    const currentPassword = layout.state().currentPassword
    expect(currentPassword).toBe('')

    const event = {
      target: {
        value: 'a'
      }
    }

    instance.handleCurrentPasswordChange(event)
    layout.update()

    const updatedCurrentPassword = layout.state().currentPassword
    expect(updatedCurrentPassword).toBe('a')
  })

  it('handle handleNewPassword Change', () => {
    const component = (
      <ChangePasswordForm
        user={mockUser}
        dispatch={jest.fn()}
        isChangingPassword={true}
        changePasswordError='test'
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: ChangePasswordForm = layout.instance() as ChangePasswordForm

    const newPassword = layout.state().newPassword
    expect(newPassword).toBe('')

    const event = {
      target: {
        value: 'a'
      }
    }

    instance.handleNewPasswordChange(event)
    layout.update()

    const updatedNewPassword = layout.state().newPassword
    expect(updatedNewPassword).toBe('a')
  })

  it('handle handleConfirmNewPassword Change', () => {
    const component = (
      <ChangePasswordForm
        user={mockUser}
        dispatch={jest.fn()}
        isChangingPassword={true}
        changePasswordError='test'
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: ChangePasswordForm = layout.instance() as ChangePasswordForm

    const confirmNewPassword = layout.state().confirmNewPassword
    expect(confirmNewPassword).toBe('')

    const event = {
      target: {
        value: 'a'
      }
    }

    instance.handleConfirmNewPasswordChange(event)
    layout.update()

    const updatedConfirmNewPassword = layout.state().confirmNewPassword
    expect(updatedConfirmNewPassword).toBe('a')
  })

  it('handle onChangePassword action correctly', () => {
    const dispatch = jest.fn()
    const component = (
      <ChangePasswordForm
        user={mockUser}
        dispatch={dispatch}
        isChangingPassword={true}
        changePasswordError='test'
      />
    )

    const layout = shallow(component)
    const instance: ChangePasswordForm = layout.instance() as ChangePasswordForm

    instance.onChangePassword()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })
})