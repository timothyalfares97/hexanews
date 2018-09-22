/**
 * Unit tests for checking the behavior of profileForm components
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import { ProfileForm, Props, ComponentState } from '../ProfileForm'

jest.mock('react-quill')
Enzyme.configure({ adapter: new Adapter() })

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

describe('Profile Form', () => {
  it('renders Profile Form', () => {
    const component = renderer.create(
      <ProfileForm
        user={mockUser}
        dispatch={jest.fn()}
        isEditingUser={false}
        editUserError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Profile Form with isEditingUser as true', () => {
    const component = renderer.create(
      <ProfileForm
        user={mockUser}
        dispatch={jest.fn()}
        isEditingUser={true}
        editUserError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle handleNameChange', () => {
    const component = (
      <ProfileForm
        user={mockUser}
        dispatch={jest.fn()}
        isEditingUser={true}
        editUserError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: ProfileForm = layout.instance() as ProfileForm

    const name = layout.state().name
    expect(name).toBe('user')

    const event = {
      target: {
        value: 'user2'
      }
    }

    instance.handleNameChange(event)
    layout.update()

    const updatedName = layout.state().name
    expect(updatedName).toBe('user2')
  })

  it('handle onChangeDescription', () => {
    const component = (
      <ProfileForm
        user={mockUser}
        dispatch={jest.fn()}
        isEditingUser={true}
        editUserError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: ProfileForm = layout.instance() as ProfileForm

    const description = layout.state().description
    expect(description).toBe('desc')

    const event = {
      target: {
        value: 'desc2'
      }
    }

    instance.handleDescriptionChange(event)
    layout.update()

    const updatedDescription = layout.state().description
    expect(updatedDescription).toBe('desc2')
  })

  it('handle onSaveProfile action correctly', () => {
    const dispatch = jest.fn()
    const component = (
      <ProfileForm
        user={mockUser}
        dispatch={dispatch}
        isEditingUser={true}
        editUserError=''
      />
    )

    const layout = shallow(component)
    const instance: ProfileForm = layout.instance() as ProfileForm

    instance.onSaveProfile()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })
})