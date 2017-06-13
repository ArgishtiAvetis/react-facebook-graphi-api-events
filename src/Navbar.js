import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <li><Link to="/">All Events</Link></li>
          <li><Link to="/parties">Parties</Link></li>
          <li><Link to="/theatres">Theatres</Link></li>
        </ul>
      </nav>
    )
  }
}
