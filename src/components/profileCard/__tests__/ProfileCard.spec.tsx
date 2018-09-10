import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import ProfileCard from '../ProfileCard'

Enzyme.configure({ adapter: new Adapter() })

describe('Profile Card', () => {
  it('renders Profile Card', () => {
    const component = renderer.create(
      <ProfileCard
        name='test'
        description='desc'
        image='test'
        createdAt='asdf'
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})