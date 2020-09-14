import React from 'react';
import logo from '../../images/mesto-russia-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__logo">
        <img src={logo} alt="Логотип Mesto Russia" />
      </a>
    </header>
  );
}

export default Header;