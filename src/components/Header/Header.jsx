import React from "react";
import './Header.css';
import logo from '../../images/artix_logo.svg';

export default function Header () {
  return (
    <header className="header">
      <div className="header__wrapper">
        <button className="header__burger"/>
        <p className="header__text">Тестовое задание</p>
      </div>
      <img className="header__logo" alt="logo" src={logo} />
    </header>
  )
}

