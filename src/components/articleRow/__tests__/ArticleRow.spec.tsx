import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import ArticleRow from '../ArticleRow'

Enzyme.configure({ adapter: new Adapter() })

describe('Article Row', () => {
  it('renders Article row', () => {
    const component = renderer.create(
      <ArticleRow
        title='test'
        description='test'
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})