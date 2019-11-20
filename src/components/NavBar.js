import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-info" role="navigation" aria-label="main navigation">

        <Link to="/" className="navbar-item">BMCE CAPITAL</Link>

        <Link to="/" className="navbar-item">Users List</Link>
        <Link to="/create-user" className="navbar-item">New User</Link>
      </nav>
    )
  }
}
