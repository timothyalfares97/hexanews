import { createStructuredSelector } from 'reselect'

import { State } from '../../reducers'

export interface StateProps {
  isLoggedIn: boolean
}

const isLoggedIn = (state: State) => state.isLoggedIn

export default createStructuredSelector<State, StateProps>({
  isLoggedIn,
})