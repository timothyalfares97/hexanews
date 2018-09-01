import { createStructuredSelector } from 'reselect'
import { State } from '../../reducers'

export interface StateProps {
  isLoadingRegister: boolean
  isLoadingLogin: boolean
}

const isLoadingRegister = (state: State) => state.containers.header.isLoadingRegister
const isLoadingLogin = (state: State) => state.containers.header.isLoadingLogin

export default createStructuredSelector<State, StateProps>({
  isLoadingRegister,
  isLoadingLogin,
})