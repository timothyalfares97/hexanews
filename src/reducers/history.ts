/**
 * Redux reducer for history object.
 */

import { History } from 'history'

import { ActionTypes } from '../actions/ActionTypes'

const history = (state: any = '', action: any) => {
  switch (action.type) {
    case ActionTypes.RECEIVED_HISTORY_OBJECT:
      return action.history
    default:
      return state
  }
}

export type History = History

export default history