import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Category selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    const props = {
      match: {
        params: {
          category: ''
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      categoryTitle: '',
      categoryArticles: [],
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
          category: 'technology',
          authorId: 'test',
        }]
      }
    }

    const props = {
      match: {
        params: {
          category: 'technology'
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      categoryTitle: 'technology',
      categoryArticles: [{
        _id: '1',
        title: 'abc',
        description: 'test',
        category: 'technology',
        authorId: 'test',
      }]
    })
  })
})