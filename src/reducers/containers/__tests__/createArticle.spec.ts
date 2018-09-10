import { isCreatingArticle } from '../createArticle'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Create Article Reducer', () => {
  it('Default state and isCreatingArticle action', () => {
    const isCreatingArticleState = false
    expect(isCreatingArticle(isCreatingArticleState, {})).toBe(false)

    const isCreatingArticleAction = { type: ActionTypes.CREATE_ARTICLE_REQUESTED }
    expect(isCreatingArticle(isCreatingArticleState, isCreatingArticleAction)).toBe(true)

    const isCreatingArticleAction2 = { type: ActionTypes.CREATE_ARTICLE_SUCCESS }
    expect(isCreatingArticle(isCreatingArticleState, isCreatingArticleAction2)).toBe(false)

    const isCreatingArticleAction3 = { type: ActionTypes.CREATE_ARTICLE_FAILED }
    expect(isCreatingArticle(isCreatingArticleState, isCreatingArticleAction3)).toBe(false)
  })
})