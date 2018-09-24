/**
 * Unit tests for checking the behavior of CreateArticle container
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { shallow } from 'enzyme'

import { CreateArticle, Props, ComponentState } from '../CreateArticle'

jest.mock('react-quill')
Enzyme.configure({ adapter: new Adapter() })

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

const mockCategory = {
  title: 'tech',
  description: 'test',
}

describe('Create Article', () => {
  it('renders Create Article', () => {
    const component = renderer.create(
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={jest.fn()}
        isCreatingArticle={false}
        createArticleError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Create Article with isCreatingArticle as true', () => {
    const component = renderer.create(
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={jest.fn()}
        isCreatingArticle={true}
        createArticleError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle onChangeTitle', () => {
    const component = (
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={jest.fn()}
        isCreatingArticle={true}
        createArticleError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: CreateArticle = layout.instance() as CreateArticle

    const title = layout.state().title
    expect(title).toBe('')

    const event = {
      target: {
        value: 'asdf'
      }
    }

    instance.handleTitleChange(event)
    layout.update()

    const updatedTitle = layout.state().title
    expect(updatedTitle).toBe('asdf')
  })

  it('handle onChangeCategory', () => {
    const component = (
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={jest.fn()}
        isCreatingArticle={true}
        createArticleError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: CreateArticle = layout.instance() as CreateArticle

    const category = layout.state().category
    expect(category).toBe('')

    const event = {
      target: {
        value: 'technology'
      }
    }

    instance.handleCategoryChange(event)
    layout.update()

    const updatedCategory = layout.state().category
    expect(updatedCategory).toBe('technology')
  })

  it('handle onChangeDescription', () => {
    const component = (
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={jest.fn()}
        isCreatingArticle={true}
        createArticleError=''
      />
    )

    const layout = shallow<Props, ComponentState>(component)
    const instance: CreateArticle = layout.instance() as CreateArticle

    const description = layout.state().description
    expect(description).toBe('')

    const html = '<p>test</p>'

    instance.handleDescriptionChange(html)
    layout.update()

    const updatedDescription = layout.state().description
    expect(updatedDescription).toBe(html)
  })

  it('handle onCreateArticle action correctly', () => {
    const dispatch = jest.fn()
    const component = (
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={dispatch}
        isCreatingArticle={true}
        createArticleError=''
      />
    )

    const layout = shallow(component)
    const instance: CreateArticle = layout.instance() as CreateArticle

    instance.onCreateArticle()
    layout.update()

    expect(dispatch).toHaveBeenCalled()
  })

  it('handle button cancel click', () => {
    const dispatch = jest.fn()
    const component = (
      <CreateArticle
        user={mockUser}
        categories={[mockCategory]}
        dispatch={dispatch}
        isCreatingArticle={true}
        createArticleError=''
      />
    )
    const layout = shallow(component)
    layout.find('#cancelButton').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})