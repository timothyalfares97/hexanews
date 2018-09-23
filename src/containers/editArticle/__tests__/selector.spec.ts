/**
 * Unit tests for checking the behavior of selector for Edit Article
 */

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
          isEditingArticle: true,
          editArticleError: 'asdf'
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
      editArticleError: 'asdf'
    })
  })
})