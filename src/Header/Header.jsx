import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => (

  <nav className="navbar">
      <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
      >
          Home
      </NavLink>
         <NavLink
          activeClassName="navbar__link-active"
          className="navbar__link"
          to="/Shoes"
      >
          Shoes
      </NavLink>
      <NavLink
          cactiveClassName="navbar__link-active"
          className="navbar__link"
          to="Routes"
      >
          Routes
      </NavLink>
      <NavLink
          activeClassName="navbar__link-active"
          className="navbar__link"
          to="/team"
      >
          Team
      </NavLink>

  </nav>
);


export default Header;
