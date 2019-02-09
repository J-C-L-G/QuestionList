import React from 'react';
import { Link } from 'react-router-dom'
import { appHeader, appMenu } from './Header.scss';

const Header = () => (
    <header className={ appHeader }>
        <nav className={appMenu}>
            <Link to="/">Home</Link>
            <Link to="/all">All</Link>
            <Link to="/question/1">1</Link>
        </nav>
    </header>
);

export default Header;