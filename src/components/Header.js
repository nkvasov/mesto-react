import React from 'react';
import logo from '../images/mesto-russia-logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
          <a href="#" className="header__logo">
            <img src={logo} alt="Логотип Mesto Russia" />
          </a>
      </header>
    );
  }
}