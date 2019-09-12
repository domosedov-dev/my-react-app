import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={style.header}>
      <div>
        <NavLink to={"/"}>
          <img
            src={"https://cdn.svgporn.com/logos/react.svg"}
            alt={"React"}
            className={style.logo}
          />
        </NavLink>
      </div>
      <div className={style.title}>
        <h1>My React App</h1>
      </div>
      <div className={style.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
