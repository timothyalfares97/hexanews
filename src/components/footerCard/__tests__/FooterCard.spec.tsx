import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as Enzyme from 'enzyme'
import { shallow } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

import FooterCard from '../FooterCard'
import { Article } from '../../../domain/model/Article'

Enzyme.configure({ adapter: new Adapter() })

const mockArticle: Article = {
  _id: '2',
  title: 'def',
  description: 'tester',
  category: 'tester',
  authorId: 'tester',
}

describe('Footer Card', () => {
  it('renders Footer Card', () => {
    const component = renderer.create(
      <FooterCard
        dispatch={jest.fn()}
        article={mockArticle}
        authorName='test'
      />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handle button go to article click', () => {
    const dispatch = jest.fn()
    const component = (
      <FooterCard
        dispatch={dispatch}
        article={mockArticle}
        authorName='test'
      />
    )
    const layout = shallow(component)
    layout.find('#footer-2').first().simulate('click')
    expect(dispatch).toHaveBeenCalled()
  })
})