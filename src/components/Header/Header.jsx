import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
      <header className={style.header}>
          <img src='https://cdn.svgporn.com/logos/react.svg' alt="" className={style.logo}/>
          <h1 className={style.title}>My React App</h1>
      </header>
    );
};

export default Header;