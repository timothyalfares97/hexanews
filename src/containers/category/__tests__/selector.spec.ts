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
      category: undefined,
      users: [],
      categoryArticles: [],
    })
  })

  it('Changed state without article category', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      entities: {
        ...initialState.entities,
        articles: [{
          _id: '1',
          title: 'abc',
          description: 'test',
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
      category: undefined,
      users: [],
      categoryArticles: []
    })
  })

  it('Changed state with article category', () => {
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
      category: undefined,
      users: [],
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