import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import rootReducer from '../../../reducers'
import * as actions from '../actions'
import { ActionTypes } from '../../../actions/ActionTypes'
import ArticleRepository from '../../../domain/repository/ArticleRepository'

const mockStore = configureStore([thunk])
const mockData = {
  response: {
    data: { code: 'SUCCESS' }
  }
}
jest.unmock('../../../domain/repository/ArticleRepository')
ArticleRepository.delete = jest.fn(() => mockData)

describe('Article Detail actions', () => {
  describe('deleteArticle', () => {
    it('provides expected results', async() => {
      const store = mockStore(rootReducer(undefined as any, { type: '' }))

      await actions.deleteArticle('1')(store.dispatch)
      const expectedActions = [
        { type: ActionTypes.DELETE_ARTICLE_REQUESTED },
        { type: ActionTypes.DELETE_ARTICLE_FAILED },
      ]

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})