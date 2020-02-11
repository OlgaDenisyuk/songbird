import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return <nav className="nav">
        <ul>
            <li className="active">Разминка</li>
            <li>Воробьиные</li>
            <li>Лесные птицы</li>
            <li>Певчие птицы</li>
            <li>Хищные птицы</li>
            <li>Морские птицы</li>
        </ul>
    </nav>
}

export default Navbar;