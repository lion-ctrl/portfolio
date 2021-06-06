import React from 'react';

const Header = () => {
    return ( 
        <header className="header">
            <a href="#" className="header__logo">Portfolio</a>
            <div className="toggle-menu"></div>
            <div className="header__menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Work</a>
                <a href="#">Contact</a>
            </div>
        </header>
    );
}
export default Header;