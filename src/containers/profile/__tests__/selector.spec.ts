import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Profile selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      user: {},
      userArticles: [],
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      entities: {
        ...initialState.entities,
        user: {
          _id: '1',
          createdAt: 'created',
          description: 'desc',
          email: 'user@email.com',
          name: 'user'
        },
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
      user: {
        _id: '1',
        createdAt: 'created',
        description: 'desc',
        email: 'user@email.com',
        name: 'user'
      },
      userArticles: []
    })
  })
})