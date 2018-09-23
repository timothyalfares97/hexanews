/**
 * Unit tests for checking the behavior of selector for Search Article
 */

import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Search Article selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      articles: []
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      entities: {
        ...initialState.entities,
        articles: [{
          _id: '1',
          title: 'abc',
          description: 'test',
          category: 'test',
          authorId: 'test',
        }]
      }
    }

    expect(selector(state)).toMatchObject({
      articles: [{
        _id: '1',
        title: 'abc',
        description: 'test',
        category: 'test',
        authorId: 'test',
      }]
    })
  })
})