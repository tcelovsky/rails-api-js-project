import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/lists' exact>My Lists</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about' exact>About</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default NavBar;