import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul>
                <li><a href="/#">Profile</a></li>
                <li><a href="/#">Dialogs</a></li>
                <li><a href="/#">Link 3</a></li>
                <li><a href="/#">Link 4</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;