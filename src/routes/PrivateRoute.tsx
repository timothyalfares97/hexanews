/**
 * Handles private routing for the main application.
 */

import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * All props required by the container
 */
type Props = {
  isLoggedIn: boolean,
  path: string,
  component: React.ComponentType<any>,
}

/**
 * Render route only when the user is logged in. Otherwise redirect to home screen.
 */
const PrivateRoute: React.StatelessComponent<Props> = ({
  isLoggedIn,
  path,
  component: Component,
}) => {
  // Check if user is not logged in, redirect the user to home.
  if (!isLoggedIn) {
    return <Redirect to='/'/>
  }
  return (
    <Route path={path} render={(props) => (
      <Component {...props} />
    )}/>
  )
}

export default PrivateRoute
