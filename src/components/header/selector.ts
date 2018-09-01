import { createStructuredSelector } from 'reselect'
import { History } from 'history'

import { State } from '../../reducers'

export interface StateProps {
  isLoadingRegister: boolean
  isLoadingLogin: boolean
  history: History
}

const isLoadingRegister = (state: State) => state.containers.header.isLoadingRegister

const isLoadingLogin = (state: State) => state.containers.header.isLoadingLogin

const history = (state: State) => state.history

export default createStructuredSelector<State, StateProps>({
  isLoadingRegister,
  isLoadingLogin,
  history
})