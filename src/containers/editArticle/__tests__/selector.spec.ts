import rootReducer, { State }  from '../../../reducers'
import selector from '../selector'

describe('Edit Article selector', () => {
  it('Default state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
    }

    const props = {
      match: {
        params: {
          articleId: ''
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      isEditingArticle: false,
    })
  })

  it('Changed state', () => {
    const initialState: State = rootReducer(undefined, { type: '' })
    const state: State = {
      ...initialState,
      containers: {
        ...initialState.containers,
        editArticle: {
          isEditingArticle: true
        }
      },
    }

    const props = {
      match: {
        params: {
          articleId: ''
        },
      },
    }

    expect(selector(state, props)).toMatchObject({
      isEditingArticle: true,
    })
  })
})