/**
 * Redux reducers for categories state in the application.
 */

import { ActionTypes } from '../../actions/ActionTypes'
import { Category } from '../../domain/model/Category'

/**
 * Categories state that will be changed based on actions in the application
 * @param state a collection of the current state of categories
 * @param action The trigger to mutate the categories in the Redux
 * @return payload containing the categories
 */
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