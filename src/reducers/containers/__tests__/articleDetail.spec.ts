/**
 * Unit tests for checking the behavior of articleDetail container based on relevant actions
 */

import { isDeletingArticle } from '../articleDetail'
import { ActionTypes } from '../../../actions/ActionTypes'

describe('Article Detail Reducer', () => {
  it('Default state and isDeletingArticle action', () => {
    const isDeletingArticleState = false
    expect(isDeletingArticle(isDeletingArticleState, {})).toBe(false)

    const isDeletingArticleAction = { type: ActionTypes.DELETE_ARTICLE_REQUESTED }
    expect(isDeletingArticle(isDeletingArticleState, isDeletingArticleAction)).toBe(true)

    const isDeletingArticleAction2 = { type: ActionTypes.DELETE_ARTICLE_SUCCESS }
    expect(isDeletingArticle(isDeletingArticleState, isDeletingArticleAction2)).toBe(false)

    const isDeletingArticleAction3 = { type: ActionTypes.DELETE_ARTICLE_FAILED }
    expect(isDeletingArticle(isDeletingArticleState, isDeletingArticleAction3)).toBe(false)
  })
})