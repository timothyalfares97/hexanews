import * as React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  public render() {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    )
  }
}

export default Header;
