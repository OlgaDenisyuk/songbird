import React from 'react';
import './Header.css';

const Header = () => {
    return <header className="header">
        <div className="header__logo">Song<span>bird</span></div>
        <div className="header__score">Score: <span className="score">0</span></div>
    </header>
}

export default Header;