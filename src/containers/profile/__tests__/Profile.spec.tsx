import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { omit } from 'lodash'

import { Profile } from '../Profile'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticles: Article[] = [
  {
    _id: '1',
    title: 'abc',
    description: 'test',
    category: 'test',
    authorId: 'test',
  },
  {
    _id: '2',
    title: 'def',
    description: 'tester',
    category: 'tester',
    authorId: 'tester',
  }
]

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

describe('Profile', () => {
  it('renders Profile', () => {
    const component = renderer.create(
      <Profile
        user={mockUser}
        userArticles={mockArticles}
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Profile without description', () => {
    const missingDescriptionUser = omit(mockUser, ['description'])
    const component = renderer.create(
      <Profile
        user={missingDescriptionUser}
        userArticles={mockArticles}
        dispatch={jest.fn()}
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle button go to account page', () => {
    const dispatch = jest.fn()
    const component = (
      <Profile
        user={mockUser}
        userArticles={mockArticles}
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#accountButton').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })

  it('handle card click go to article detail page', () => {
    const dispatch = jest.fn()
    const component = (
      <Profile
        user={mockUser}
        userArticles={mockArticles}
        dispatch={dispatch}
      />
    )
    const layout = shallow(component)
    layout.find('#card-1').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})