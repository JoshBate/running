import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import Logo from '../images/logo.png';

const Header = () => (

  <header>
    <img className="navbar__title navbar__item" src={Logo} alt="the logo"></img>
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
          to="/Shoes"
          >
          Shoes
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
