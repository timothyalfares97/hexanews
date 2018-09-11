import articles from '../articles'
import { ActionTypes } from '../../../actions/ActionTypes'
import { Article } from '../../../domain/model/Article'

describe('Articles Reducer', () => {
  it('Default state and get articles', () => {
    const initialArticlesState: Article[] = []
    expect(articles(initialArticlesState, {})).toBe(initialArticlesState)

    const mockArticles: Article[] = [
      {
        _id: '1',
        title: 'abc',
        description: 'test',
        category: 'test',
        authorId: 'test',
      },
      {
        _id: '2',
        title: 'def',
        description: 'tester',
        category: 'tester',
        authorId: 'tester',
      }
    ]

    const articlesAction = { type: ActionTypes.GET_ARTICLES, articles: mockArticles }
    expect(articles(initialArticlesState, articlesAction)).toEqual(mockArticles)

    const articlesAction2 = { type: ActionTypes.CREATE_ARTICLE_SUCCESS, article: mockArticles[0] }
    expect(articles(initialArticlesState, articlesAction2)).toEqual([mockArticles[0]])

    const articlesAction3 = { type: ActionTypes.DELETE_ARTICLE_SUCCESS, id: '1' }
    expect(articles(initialArticlesState, articlesAction3)).toEqual([])
  })
})