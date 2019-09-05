import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <NavLink
            to="/profile"
            className={style.link}
            activeClassName={style.link_active}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/im"
            className={style.link}
            activeClassName={style.link_active}
          >
            Dialogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={style.link}
            activeClassName={style.link_active}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={style.link}
            activeClassName={style.link_active}
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
