import logo from '../common/image/logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import BasketSvg from '../common/svg/BasketSvg';
import React from 'react';

const Header = ({ totalPrice, totalCount }) => {
  return (
    <header className="header">
      <div className="container d-flex">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <div className="header-links d-flex">
          <Link to="/contacts">Контакты</Link>
          <Link to="/menu">Меню</Link>
          <div className="header__cart">
            <Link to="/basket" className="button button--cart">
              <span>{totalPrice} сом</span>
              <div className="button__delimiter"></div>
             <BasketSvg/>
              <span>{totalCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
