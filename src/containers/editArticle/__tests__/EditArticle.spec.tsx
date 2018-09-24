/**
 * Unit tests for checking the behavior of EditArticle container
 */

import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import { EditArticle } from '../EditArticle'

jest.mock('react-quill')
Enzyme.configure({ adapter: new Adapter() })

const mockUser = {
  _id: '1',
  createdAt: 'created',
  description: 'desc',
  email: 'user@email.com',
  name: 'user'
}

const mockArticle = {
  _id: '2',
  title: 'def',
  description: 'tester',
  category: 'tester',
  authorId: 'tester',
}

const mockCategory = {
  title: 'tech',
  description: 'test',
}

describe('Edit Article', () => {
  it('renders Edit Article', () => {
    const component = renderer.create(
      <EditArticle
        user={mockUser}
        dispatch={jest.fn()}
        userArticle={mockArticle}
        categories={[mockCategory]}
        isUserArticle={false}
        isEditingArticle={false}
        editArticleError=''
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})