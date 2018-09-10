import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Create Article selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    expect(selector(state)).toMatchObject({
      isCreatingArticle: false,
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      containers: {
        ...initialState.containers,
        createArticle: {
          isCreatingArticle: true
        }
      },
    }

    expect(selector(state)).toMatchObject({
      isCreatingArticle: true,
    })
  })
})