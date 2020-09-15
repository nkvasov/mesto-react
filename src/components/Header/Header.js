import React from 'react';
import logo from '../../images/mesto-russia-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="https://ss.metronews.ru/userfiles/materials/60/605363/858x429.jpg" className="header__logo">
        <img src={logo} alt="Логотип Mesto Russia" />
      </a>
    </header>
  );
}

export default Header;