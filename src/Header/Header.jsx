import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (

  <header>
    <div />
    <ul className="nav__links">
      <li>
        <NavLink
          exact
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Routes"
        >
          Routes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/team"
        >
          Team
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
