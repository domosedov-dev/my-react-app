import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p>My React app footer</p>
            <p>2019</p>
        </footer>
    );
};

export default Footer;