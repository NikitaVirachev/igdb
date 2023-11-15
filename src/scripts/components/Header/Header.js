import React from 'react';

import classes from './Header.module.scss';
import Burger from './Burger';
import Logo from './Logo';
import Navbar from './Navbar/Navbar';

const Header = function () {
  return (
    <header id="header" className={classes.header}>
      <Logo />

      <div className={classes.header__burder}>
        <Burger id="navbar-burger-btn" />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
