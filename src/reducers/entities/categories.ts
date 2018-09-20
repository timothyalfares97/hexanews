/**
 * Redux reducer for the categories.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { Category } from '../../domain/model/Category'

const categories = (state: Category[] = [], action: any = {}) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}

export type CategoryEntities = Category[]

export default categories