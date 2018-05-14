import React, {Component} from 'react';
import Header from './Header'
import {NavLink} from 'react-router-dom'; // destructuring

class Nav extends Component {
  render() {
    return (
      <div className="nav">
          <NavLink id="nav-home" className="nav-link" to="/" exact activeClassName="is-active">Home</NavLink>
          <NavLink id="nav-members" className="nav-link" to="/Members" activeClassName="is-active">Members</NavLink>
          <NavLink id="nav-photos" className="nav-link" to="/Photos" activeClassName="is-active">Photos</NavLink>
          <NavLink id="nav-pages" className="nav-link" to="/Pages" activeClassName="is-active">Pages</NavLink>
          <NavLink id="nav-discussions" className="nav-link" to="/Discussions" activeClassName="is-active">Discussions</NavLink>
          <NavLink id="nav-more" className="nav-link" to="/More" activeClassName="is-active">More</NavLink>
      </div>
    )
  }
}

export default Nav;
