/**
 * Handles Article Detail to be always always scrolled to the top of application.
 */

import * as React from 'react'
import { withRouter } from 'react-router-dom'

type Props = {
  location: Location
}

class ScrollRestoration extends React.Component<Props> {

  /**
   * Component lifecycle to be called when component got updated
   */
  componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  /**
   * Render Article Detail container
   */
  render() {
    return this.props.children
  }
}

export default withRouter(ScrollRestoration as any)